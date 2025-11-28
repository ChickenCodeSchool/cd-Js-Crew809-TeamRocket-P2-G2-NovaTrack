import { useEffect, useState } from "react";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loader from "../../components/Loader/Loader";
import "./ISSInfos.css";
type ISSdataTypes = {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
};

type ISSlocTypes = {
  country: string;
  lat: number;
  lon: number;
  backup: string;
  // region: string;
  // city: string;
  // ocean: string;
};

function ISSinfos() {
  const [issData, setIssData] = useState<ISSdataTypes | null>();
  const [geoLoc, setGeoLoc] = useState<ISSlocTypes | null>();
  const [err, setErr] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const fetchISSPosition = async () => {
    try {
      const issResponse = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const issJson = await issResponse.json();

      setIssData({
        latitude: issJson.latitude,
        longitude: issJson.longitude,
        altitude: issJson.altitude,
        velocity: issJson.velocity,
      });

      const geoResponse = await fetch(
        `https://api.locationiq.com/v1/reverse?lat=${issJson.latitude}&lon=${issJson.longitude}&format=json&accept-language=en&addressdetails=1&oceans=1&key=pk.529cb0481dd3718197fa5fa588d2953d`
      );
      // `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${issJson.latitude}&longitude=${issJson.longitude}&localityLanguage=en`
      const geoJson = await geoResponse.json();

      setGeoLoc({
        // country: geoJson.countryName || "Over Ocean",
        // region: geoJson.principalSubdivision || "",
        // city: geoJson.city || geoJson.locality || "",
        // ocean: geoJson.localityInfo?.informative?.[0]?.name || "",
        lon: geoJson.lon,
        lat: geoJson.lat,
        country: geoJson.address.country,
        backup: geoJson.display_name,
      });

      if (issResponse.status !== 200 || geoResponse.status !== 200) {
        // if iss throw error (deux if)
        throw new Error(issResponse.status || geoResponse.status);
      }
      console.log(geoJson);
    } catch (error) {
      if (error === 429) {
        return;
      }
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetchISSPosition();
    const interval = setInterval(() => {
      fetchISSPosition();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (err) {
    return <ErrorComp big={false} statNumb={err} />;
  }
  if (!geoLoc) {
    return <Loader />;
  }
  return (
    <>
      {" "}
      <div className="locate">
        <div>
          <span>ISS is curtently above </span>

          {geoLoc.country === undefined || geoLoc.country === "" ? (
            <span className="  divSmall">
              <span key={geoLoc?.backup} className="issValues">
                {geoLoc?.backup}
              </span>
            </span>
          ) : (
            <span className=" divSmall">
              <span key={geoLoc?.country} className="issValues">
                {geoLoc?.country}
              </span>
            </span>
          )}
        </div>
        <div>
          <span>Latitude </span>
          <span className=" divSmall">
            <span key={issData?.latitude} className="issValues">
              {issData?.latitude}
            </span>
          </span>
        </div>
        <div>
          <span>Longitude </span>
          <span className=" divSmall">
            <span key={issData?.longitude} className="issValues">
              {issData?.longitude}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default ISSinfos;
