import "./DetailEvents.css";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorComp from "../../components/ErrorComp/ErrorComp";

type SpaceEvent = {
  name: string;
  description: string;
  date: string;
  location: string;
  longitude: number;
  latitude: number;
  duration: string;
  webcast_live: boolean;
  image: {
    image_url: string;
    thumbnail_url: string;
    credit: string;
  };
  type: {
    name: string;
  };
  date_precision: {
    name: string;
  };
  agencies: Array<{
    id: number;
    name: string;
    abbrev: string;
  }>;
  astronauts: Array<{
    id: number;
    name: string;
    image: {
      thumbnail_url: string;
    };
    agency: {
      name: string;
      abbrev: string;
    };
  }>;
  launches: Array<{
    id: string;
    name: string;
    image: {
      thumbnail_url: string;
    };
    status: {
      name: string;
    };
  }>;
  expeditions: Array<{
    id: string;
    name: string;
    spacestation: {
      name: string;
    };
  }>;
  spacestations: Array<{
    id: number;
    name: string;
    image: {
      thumbnail_url: string;
    };
    status: {
      name: string;
    };
  }>;
  program: Array<{
    id: number;
    name: string;
    image: {
      thumbnail_url: string;
    };
  }>;
  vid_urls: Array<{
    title: string;
    publisher: string;
    feature_image: string;
    live: boolean;
  }>;
  info_urls: Array<{
    title: string;
    source: string;
    feature_image: string;
  }>;
  updates: Array<{
    comment: string;
    created_by: string;
    created_on: string;
    profile_image: string;
  }>;
};

type VideoUrl = {
  live: boolean;
  url: string;
  type: {
    name: string;
  };
  feature_image: string;
  publisher: string;
};

function DetailEvents() {
  const [res, setRes] = useState<SpaceEvent | null>();
  const [vid, setVid] = useState<VideoUrl | null>(null);
  const [err, setErr] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://lldev.thespacedevs.com/2.3.0/events/${id}?mode=list`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setRes(data);
        const liveVideo = data.vid_urls.find((video) => video.live === true);

        if (liveVideo) {
          setVid(liveVideo);
        } else if (data.vid_urls && data.vid_urls.length > 0) {
          setVid(data.vid_urls[0]);
        }
      })
      .catch((error) => setErr(error.message));
  }, [id]);
  if (err) {
    return <ErrorComp big={true} statNumb={err} />;
  }
  if (!res) {
    return <Loader />;
  }
  return (
    <>
      <article className="eventsDetailContainer">
        <>
          <div className="eventDetail-top">
            <div className="title">
              <h1>{res.name}</h1>
              <em>{res.type.name}</em>
            </div>
            <div className="image">
              <img
                src={res.image?.image_url}
                alt={res.name}
                className="imgPic"
              />
            </div>
            <div className="about">
              <h3>About</h3>
              <span>{res.description}</span>
              <span>
                {new Date(res.date).toLocaleString()} 📍 {res.location}
              </span>
            </div>
            <div className="vid">
              {vid ? (
                <>
                  <h3>Event Video</h3>
                  {vid.live ? (
                    <span>🔴 NOW LIVE</span>
                  ) : (
                    <span>{vid.type?.name}</span>
                  )}
                  {vid.feature_image ? (
                    <a href={vid.url} target="_blank" rel="noreferrer">
                      <img
                        className="imgPic iframe"
                        src={vid.feature_image}
                        alt={res.name}
                      />
                    </a>
                  ) : (
                    <a
                      href={vid.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      Watch Now
                    </a>
                  )}
                  <span>published by {vid.publisher}</span>
                </>
              ) : (
                <p>No replay or video available.</p>
              )}
            </div>
          </div>
          <h2>Related informations</h2>
          <div className="eventDetail-bottom">
            {res.astronauts && res.astronauts.length > 0 && (
              <div className="big relatedChilds">
                <h3>Astronauts</h3>
                {res.astronauts.map((astronaut: any) => (
                  <div key={astronaut.name} className="relatedSubChilds">
                    {astronaut.image?.thumbnail_url && (
                      <img
                        src={astronaut.image.thumbnail_url}
                        alt={astronaut.name}
                        className="logoImg"
                      />
                    )}
                    {astronaut.name}
                    {astronaut.agency?.abbrev &&
                      ` (${astronaut.agency.abbrev})`}
                    {astronaut.id && (
                      <Link to={`/astronaut/${astronaut.id}`} className="link">
                        View more
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
            {res.agencies && res.agencies.length > 0 && (
              <div className="relatedChilds">
                <h3>Agencies</h3>
                {res.agencies.map((agency: any) => (
                  <div key={agency.name} className="relatedSubChilds">
                    {agency.name}
                    {agency.abbrev ? ` (${agency.abbrev})` : ""}
                    {agency.id && (
                      <Link to={`/agency/${agency.id}`} className="link">
                        View more
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
            {res.launches && res.launches.length > 0 && (
              <div className=" relatedChilds big">
                <h3>Launches</h3>
                {res.launches.map((launch) => (
                  <div key={launch.id} className="relatedSubChilds">
                    {launch.image?.thumbnail_url && (
                      <img
                        src={launch.image.thumbnail_url || res.image.image_url}
                        alt={launch.name}
                        className="imgPic"
                      />
                    )}
                    <span>
                      {launch.name}
                      {launch.status?.name && ` - ${launch.status.name}`}
                    </span>
                    {launch.id && (
                      <Link to={`/launch/${launch.id}`} className="link">
                        More about this launch
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
            {res.expeditions && res.expeditions.length > 0 && (
              <div className="relatedChilds">
                <h3>Related expedition</h3>
                {res.expeditions[0].name} on{" "}
                {res.expeditions[0].spacestation.name}
                {res.expeditions[0].id && (
                  <Link
                    to={`/expeditions/${res.expeditions.id}`}
                    className="link"
                  >
                    More about this expedition
                  </Link>
                )}
              </div>
            )}
            {res.spacestations && res.spacestations.length > 0 && (
              <div className="relatedChilds big">
                <h3>Space Stations</h3>
                {res.spacestations.map((station: any) => (
                  <div key={station.name} className="relatedSubChilds">
                    {station.image?.thumbnail_url && (
                      <img
                        src={station.image.thumbnail_url}
                        alt={station.name}
                        className="imgPic"
                      />
                    )}
                    {station.name}
                    {station.status?.name && ` - ${station.status.name}`}
                    {station.id && (
                      <Link to={`/spacestation/${station.id}`} className="link">
                        View more
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
            {res.program && res.program.length > 0 && (
              <div className="relatedChilds">
                <h3>Programs</h3>
                {res.program.map((prog: any) => (
                  <div key={prog.name} className="relatedSubChilds">
                    {prog.image?.thumbnail_url && (
                      <img
                        src={prog.image.thumbnail_url}
                        alt={prog.name}
                        className="logoImg"
                      />
                    )}
                    {prog.name}
                    {prog.id && (
                      <Link to={`/program/${prog.id}`} className="link">
                        More about this program
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      </article>
    </>
  );
}

export default DetailEvents;
