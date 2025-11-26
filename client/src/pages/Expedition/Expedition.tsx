import "./expedition.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Loader from "../../components/Loader/Loader";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import type { ExpeditionDetail } from "../../types/detailTypes";

function Expedition() {
  const { id } = useParams();
  const [res, setRes] = useState<ExpeditionDetail | null>();

  const [err, setErr] = useState(null);
  useEffect(() => {
    fetch(`https://lldev.thespacedevs.com/2.3.0/expeditions/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setRes(data))
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
      <article className="expeditionDetailContainer">
        <>
          <div className="title divStyle">
            <h1>{res.name}</h1>
            <em>{res.spacestation?.name}</em>
          </div>
          <div className="image divStyle">
            {res.mission_patches && res.mission_patches.length > 0 ? (
              <img
                src={res.mission_patches[0].image_url}
                alt={res.name}
                className="imgPic"
              />
            ) : res.spacestation?.image?.image_url ? (
              <img
                src={res.spacestation.image.image_url}
                alt={res.name}
                className="imgPic"
              />
            ) : null}
          </div>
          <div className="about divStyle">
            <h3>About</h3>
            <span>Started: {new Date(res.start).toLocaleString()}</span>
            <br />
            {res.end && (
              <span> Ended: {new Date(res.end).toLocaleString()}</span>
            )}{" "}
            <br />
            {res.spacestation?.orbit && (
              <span>Orbit: {res.spacestation.orbit}</span>
            )}
          </div>

          {res.spacestation && (
            <div className="spaceStation">
              <h3>Space Station</h3>
              <div className="divStyle sta">
                {res.spacestation.image?.thumbnail_url && (
                  <img
                    src={res.spacestation.image.thumbnail_url}
                    alt={res.spacestation.name}
                    className="imgPic"
                  />
                )}
                <div>
                  <span>
                    <strong>{res.spacestation.name}</strong>
                    {res.spacestation.status?.name &&
                      ` - ${res.spacestation.status.name}`}
                  </span>
                  {res.spacestation.description && (
                    <span>{res.spacestation.description}</span>
                  )}
                  {res.spacestation.id && (
                    <Link
                      to={`/spacestation/${res.spacestation.id}`}
                      className="link"
                    >
                      View more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="crew">
            <h2>Crew members</h2>
            <div className="crewAll">
              {res.crew &&
                res.crew.length > 0 &&
                res.crew.map((member) => (
                  <div
                    className="crewMember divStyle"
                    key={member.astronaut.id}
                  >
                    {member.astronaut.image?.thumbnail_url && (
                      <img
                        src={member.astronaut.image.thumbnail_url}
                        alt={member.astronaut.name}
                        className="imgPic"
                      />
                    )}
                    <span>
                      <strong>{member.astronaut.name}</strong>
                      <br />
                      <em>{member.role?.role}</em>
                      <br />
                      {member.astronaut.agency?.abbrev &&
                        ` (${member.astronaut.agency.abbrev})`}
                    </span>
                    {member.astronaut.id && (
                      <Link
                        to={`/astronaut/${member.astronaut.id}`}
                        className="link"
                      >
                        View more
                      </Link>
                    )}
                  </div>
                ))}
            </div>
            {res.spacewalks && res.spacewalks.length > 0 && (
              <div className="walks">
                <h3>Spacewalks (EVAs)</h3>
                {res.spacewalks.map((spacewalk) => (
                  <div key={spacewalk.id} className="walk divStyle">
                    <span>
                      {spacewalk.name}
                      {spacewalk.duration &&
                        ` - Duration: ${spacewalk.duration}`}
                    </span>
                    {spacewalk.start && (
                      <span>{new Date(spacewalk.start).toLocaleString()}</span>
                    )}
                    {spacewalk.location && <span>📍 {spacewalk.location}</span>}
                    {spacewalk.id && (
                      <Link to={`/spacewalk/${spacewalk.id}`} className="link">
                        View details
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
            {res.spacestation?.owners && res.spacestation.owners.length > 0 && (
              <div className="owners1">
                <h3>Station Owners</h3>
                <div className="owners">
                  {res.spacestation.owners.map((agency) => (
                    <div key={agency.id} className="owner divStyle">
                      {agency.logo?.thumbnail_url && (
                        <img
                          src={agency.logo.thumbnail_url}
                          alt={agency.name}
                          className="logoImg"
                        />
                      )}
                      {agency.name}
                      {agency.abbrev && ` (${agency.abbrev})`}
                      {agency.id && (
                        <Link to={`/Agency/${agency.id}`} className="link">
                          View more
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      </article>
    </>
  );
}
export default Expedition;
