import { useEffect, useState } from "react";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import Loader from "../../components/Loader/Loader";

type ISSdataTypes = {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
};

type ISSlocTypes = {
  country: string;
  // region: string;
  // city: string;
  // ocean: string;
};

function ISSinfos() {
  const [issData, setIssData] = useState<ISSdataTypes | null>();
  const [geoLoc, setGeoLoc] = useState<ISSlocTypes | null>();
  const [err, setErr] = useState(null);

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
        // `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${issJson.latitude}&longitude=${issJson.longitude}&localityLanguage=en`
        `https://api.locationiq.com/v1/reverse?lat=${issJson.latitude}&${issJson.longitude}&format=json&accept-language=en&addressdetails=1&oceans=1`
      );
      const geoJson = await geoResponse.json();

      setGeoLoc({
        // country: geoJson.countryName || "Over Ocean",
        // region: geoJson.principalSubdivision || "",
        // city: geoJson.city || geoJson.locality || "",
        // ocean: geoJson.localityInfo?.informative?.[0]?.name || "",

        country: geoJson.address.country,
      });

      if (issResponse.status !== 200 || geoResponse.status !== 200) {
        // if iss throw error (deux if)
        throw new Error(issResponse.status || geoResponse.status);
      }
      console.log(geoJson);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetchISSPosition();
    const interval = setInterval(() => {
      fetchISSPosition();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  if (err) {
    return <ErrorComp big={true} statNumb={err} />;
  }
  if (!geoLoc) {
    return <Loader />;
  }
  return <p className="locate">ISS is curtently above {geoLoc.city}</p>;
}

export default ISSinfos;
