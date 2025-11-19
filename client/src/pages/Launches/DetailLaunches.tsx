import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./DetailLaunches.css";
import LeafletMap from "../../components/Map/LeafletMap";

type Item = {
  name: string;

  image?: {
    image_url?: string;
  };

  net: string;
  net_precision: {
    description: string;
  };

  status: {
    name: string;
    description: string;
  };

  mission: {
    name: string;
    description: string;
    type: string;
    orbit: {
      name: string;
      abbrev: string;
      celestial_body: {
        name: string;
      };
    };
  };

  launch_service_provider: {
    administrator: string;
    name: string;
    description: string;
    abbrev: string;
    wiki_url: string;

    image?: {
      image_url?: string;
    };

    logo: {
      thumbnail_url: string;
      name: string;
    };
  };
  pad: {
    name: string;
    country: {
      name: string;
      alpha_3_code: string;
    };
    image: {
      image_url: string;
    };
  };
};

function DetailLaunches() {
  const [res, setRes] = useState<Item | null>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://lldev.thespacedevs.com/2.3.0/launches/${id}?mode=list`)
      .then((response) => response.json())
      .then((data) => setRes(data));
    console.log(res);
  }, []);
  return res ? (
    <>
      <article className="launchesDetailContainer">
        <h1>{res.name}</h1>
        <img
          src={res.image?.image_url}
          alt={res.name}
          onError={(e) => {
            e.target.src = res.launch_service_provider?.image?.image_url;
          }}
        />
        <p>
          <span className="tooltip">
            NET<span className="tip">Not Earlier Than</span>
          </span>
          : {res.net} <em>{res.net_precision.description}</em>
        </p>
        <p>
          Status : {res.status.name} <em>{res.status.description}</em>
        </p>
        <div>
          <h3>Mission</h3>
          <p>{res.mission.description}</p>
          <p>
            <span>Type : </span> {res.mission.type}
          </p>
          <p>
            <span>Orbit : </span>
            {res.mission.orbit.name} ({res.mission.orbit.abbrev})
          </p>
          <p>
            <span>Target : </span>
            {res.mission.orbit.celestial_body.name}
          </p>
        </div>
        <div>
          <h3>Launch service provider</h3>
          <p>
            Administred by {res.launch_service_provider.administrator} (
            <span className="tooltip">
              {res.launch_service_provider.name}
              <span className="tip">
                {res.launch_service_provider.description}
              </span>
            </span>
            )
            <img
              src={res.launch_service_provider.logo.thumbnail_url}
              alt={res.launch_service_provider.logo.name}
            />
            <a
              href={res.launch_service_provider.wiki_url}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              learn more about <em>{res.launch_service_provider.abbrev}</em>
            </a>
          </p>
        </div>
        <div>
          <h3>Launch pad</h3>
          <p>
            {" "}
            📍{res.pad.name} in {res.pad.country.name} (
            {res.pad.country.alpha_3_code})
          </p>
          <img src={res.pad.image.image_url} alt={res.pad.image.name} />
          <LeafletMap
            long={res.pad.location.longitude}
            lat={res.pad.location.latitude}
            description={res.pad.location.description}
          />
          <a href={res.pad.map_url} target="_blank">
            ⎋ Open in Google Maps
          </a>
        </div>
        <div>
          <h3>Rocket</h3>
          <p>
            <strong>{res.rocket.configuration.full_name}</strong> is made by{" "}
            <strong>{res.rocket.configuration.manufacturer.abbrev}</strong>
          </p>
          <p>{res.rocket.configuration.description}</p>
          <button type="button" className="link">
            Learn more about this rocket
          </button>
        </div>
      </article>
    </>
  ) : (
    <p>loading</p>
  );
}
export default DetailLaunches;
