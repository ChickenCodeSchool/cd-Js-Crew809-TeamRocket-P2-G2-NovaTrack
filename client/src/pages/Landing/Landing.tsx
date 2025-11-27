import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import LeafletMap from "../../components/Map/LeafletMap";

// import type { LandingDetail } from "../../types/detailTypes";
import "./Landing.css";

function Landing() {
  const [res, setRes] = useState<LandingDetail | null>();
  const { id } = useParams();
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(`https://ll.thespacedevs.com/2.3.0/landings/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setRes(data);
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
      <article className="landingContainer detailContainer">
        <div className="landingHeader divStyle">
          <h1>Landing Details</h1>
          {res.description && (
            <span className="landingDescription">{res.description}</span>
          )}
          <strong
            className={`statusBadge ${res.success ? "success" : "failed"}`}
          >
            {res.attempt
              ? res.success
                ? "Successful Landing"
                : "Failed Landing Attempt"
              : "Landing Not Attempted"}
          </strong>

          <span>
            {" "}
            <strong>Landing Type: </strong> {res.type.name}{" "}
            {res.type.abbrev && ` (${res.type.abbrev})`}
          </span>
          {res.type.description && <span> {res.type.description}</span>}
        </div>
        {res.landing_location && (
          <>
            <h2>Landing Location</h2>
            <div className="landingLocation divStyle">
              {res.landing_location.image?.image_url && (
                <img
                  src={res.landing_location.image.image_url}
                  alt={res.landing_location.name}
                  className="locationImage"
                />
              )}
              <div className="locationDetails">
                <h3>
                  {res.landing_location.name}{" "}
                  <em>({res.landing_location?.abbrev})</em>
                </h3>

                <span className="">
                  Status: {res.landing_location.active ? "Active" : "Inactive"}
                </span>

                {res.downrange_distance !== null && (
                  <div className="">
                    <strong>
                      <span className="tooltip">
                        Downrange Distance
                        <span className="tip">
                          The horizontal distance from the launch site to the
                          landing location
                        </span>
                      </span>
                      :
                    </strong>{" "}
                    {res.downrange_distance} km
                  </div>
                )}

                {res.landing_location.location && (
                  <div className="">
                    <strong>Region:</strong>{" "}
                    {res.landing_location.location.name}
                    {res.landing_location.location.country && (
                      <span>
                        {" "}
                        - {res.landing_location.location.country.name}
                      </span>
                    )}
                  </div>
                )}
                {res.landing_location.celestial_body && (
                  <div className="">
                    <strong>Celestial Body:</strong>{" "}
                    {res.landing_location.celestial_body.name}
                  </div>
                )}
              </div>
              <div className="locationStatistics ">
                <h3>Location Landing Statistics</h3>
                {res.landing_location.attempted_landings !== null && (
                  <div className="statItem ">
                    <strong>Total Attempted:</strong>{" "}
                    {res.landing_location.attempted_landings}
                  </div>
                )}
                {res.landing_location.successful_landings !== null && (
                  <div className="statItem ">
                    <strong>Successful:</strong>{" "}
                    {res.landing_location.successful_landings}
                  </div>
                )}
                {res.landing_location.failed_landings !== null && (
                  <div className="statItem ">
                    <strong>Failed:</strong>{" "}
                    {res.landing_location.failed_landings}
                  </div>
                )}
                {res.landing_location.successful_landings !== null &&
                  res.landing_location.attempted_landings !== null &&
                  res.landing_location.attempted_landings > 0 && (
                    <div className="statItem ">
                      <strong>Success Rate:</strong>{" "}
                      {(
                        (res.landing_location.successful_landings /
                          res.landing_location.attempted_landings) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  )}
              </div>
            </div>
          </>
        )}
        {res.firststage?.launcher &&
          res.firststage.previous_flight?.rocket?.configuration && (
            <div className="rocketConfiguration configChild divStyle">
              <h2>Rocket Configuration</h2>
              <div className="rocketCard">
                <div className="rocketInfo">
                  <h3>
                    {res.firststage.previous_flight.rocket.configuration
                      .full_name ||
                      res.firststage.previous_flight.rocket.configuration.name}
                  </h3>
                  {res.firststage.previous_flight.rocket.configuration
                    .variant && (
                    <span className=" variant">
                      Variant:{" "}
                      {
                        res.firststage.previous_flight.rocket.configuration
                          .variant
                      }
                    </span>
                  )}
                  {res.firststage.previous_flight.rocket.configuration
                    .families &&
                    res.firststage.previous_flight.rocket.configuration.families
                      .length > 0 && (
                      <div className="rocketFamilies divSmall">
                        <strong>Family:</strong>{" "}
                        {res.firststage.previous_flight.rocket.configuration.families
                          .map((f) => f.name)
                          .join(", ")}
                      </div>
                    )}
                </div>

                {res.firststage.previous_flight.rocket.configuration.id && (
                  <Link
                    to={`/Rocket/${res.firststage.previous_flight.rocket.configuration.id}`}
                    className="link"
                  >
                    View full rocket specifications
                  </Link>
                )}
              </div>
            </div>
          )}

        {res.firststage && (
          <div className="firstStage configChild divStyle">
            <h2>First Stage Booster</h2>
            {res.firststage.launcher && (
              <div className="launcherDetails">
                {res.firststage.launcher.image?.image_url && (
                  <img
                    src={res.firststage.launcher.image.image_url}
                    alt={res.firststage.launcher.serial_number || "Booster"}
                    className="boosterImage"
                  />
                )}
                <div className="boosterInfo">
                  {res.firststage.launcher.serial_number && (
                    <h3>
                      Serial Number: {res.firststage.launcher.serial_number}
                    </h3>
                  )}
                  {res.firststage.type && (
                    <span className="divSmall">
                      Type: {res.firststage.type}
                    </span>
                  )}
                  {res.firststage.reused !== undefined && (
                    <span className="divSmall">
                      Booster Reused: {res.firststage.reused ? "Yes" : "No"}
                    </span>
                  )}
                  {res.firststage.launcher_flight_number !== null && (
                    <span className="divSmall">
                      Flight Number: {res.firststage.launcher_flight_number}
                    </span>
                  )}
                  {res.firststage.launcher.flight_proven !== undefined && (
                    <span className="divSmall">
                      Flight Proven:{" "}
                      {res.firststage.launcher.flight_proven ? "Yes" : "No"}
                    </span>
                  )}
                  {res.firststage.launcher.status?.name && (
                    <span className="divSmall">
                      Status: {res.firststage.launcher.status.name}
                    </span>
                  )}
                  {res.firststage.launcher.details && (
                    <p className="boosterDetails">
                      {res.firststage.launcher.details}
                    </p>
                  )}
                </div>

                <div className="boosterStatistics configChild">
                  <h3>Booster Statistics</h3>
                  {res.firststage.launcher.flights !== null && (
                    <div className="statItem divSmall">
                      <strong>Total Flights:</strong>{" "}
                      {res.firststage.launcher.flights}
                    </div>
                  )}
                  {res.firststage.launcher.attempted_landings !== null && (
                    <div className="statItem divSmall">
                      <strong>Landing Attempts:</strong>{" "}
                      {res.firststage.launcher.attempted_landings}
                    </div>
                  )}
                  {res.firststage.launcher.successful_landings !== null && (
                    <div className="statItem divSmall">
                      <strong>Successful Landings:</strong>{" "}
                      {res.firststage.launcher.successful_landings}
                    </div>
                  )}
                  {res.firststage.launcher.first_launch_date && (
                    <div className="statItem divSmall">
                      <strong>First Flight:</strong>{" "}
                      {new Date(
                        res.firststage.launcher.first_launch_date
                      ).toLocaleDateString()}
                    </div>
                  )}
                  {res.firststage.launcher.last_launch_date && (
                    <div className="statItem divSmall">
                      <strong>Last Flight:</strong>{" "}
                      {new Date(
                        res.firststage.launcher.last_launch_date
                      ).toLocaleDateString()}
                    </div>
                  )}
                  {res.firststage.launcher.fastest_turnaround && (
                    <div className="statItem divSmall">
                      <strong>Fastest Turnaround:</strong>{" "}
                      {res.firststage.launcher.fastest_turnaround}
                    </div>
                  )}
                </div>

                {res.firststage.previous_flight_date && (
                  <div className="previousFlight divSmall">
                    <strong>Previous Flight:</strong>{" "}
                    {new Date(
                      res.firststage.previous_flight_date
                    ).toLocaleDateString()}
                    {res.firststage.turn_around_time && (
                      <span>
                        {" "}
                        (Turnaround: {res.firststage.turn_around_time})
                      </span>
                    )}
                  </div>
                )}

                {res.firststage.previous_flight &&
                  res.firststage.previous_flight.id && (
                    <Link
                      to={`/Launch/${res.firststage.previous_flight.id}`}
                      className="link"
                    >
                      View previous flight details
                    </Link>
                  )}
              </div>
            )}
          </div>
        )}

        {res.spacecraftflight && (
          <div className="spacecraftFlight configChild divStyle">
            <h2>Spacecraft Flight</h2>
            {res.spacecraftflight.spacecraft && (
              <div className="spacecraftDetails">
                {res.spacecraftflight.spacecraft.image?.image_url && (
                  <img
                    src={res.spacecraftflight.spacecraft.image.image_url}
                    alt={res.spacecraftflight.spacecraft.name}
                    className="spacecraftImage"
                  />
                )}
                <div className="spacecraftInfo">
                  <h3>{res.spacecraftflight.spacecraft.name}</h3>
                  {res.spacecraftflight.spacecraft.serial_number && (
                    <span className="divSmall">
                      Serial: {res.spacecraftflight.spacecraft.serial_number}
                    </span>
                  )}
                  {res.spacecraftflight.destination && (
                    <span className="divSmall">
                      Destination: {res.spacecraftflight.destination}
                    </span>
                  )}
                  {res.spacecraftflight.duration && (
                    <span className="divSmall">
                      Mission Duration: {res.spacecraftflight.duration}
                    </span>
                  )}
                  {res.spacecraftflight.spacecraft.description && (
                    <p>{res.spacecraftflight.spacecraft.description}</p>
                  )}
                </div>

                {res.spacecraftflight.launch &&
                  res.spacecraftflight.launch.id && (
                    <Link
                      to={`/Launch/${res.spacecraftflight.launch.id}`}
                      className="link"
                    >
                      View launch details
                    </Link>
                  )}
              </div>
            )}
          </div>
        )}

        {res.payloadflight && (
          <div className="payloadFlight configChild divStyle">
            <h2>Payload Information</h2>
            {res.payloadflight.payload && (
              <div className="payloadDetails">
                {res.payloadflight.payload.image?.image_url && (
                  <img
                    src={res.payloadflight.payload.image.image_url}
                    alt={res.payloadflight.payload.name}
                    className="payloadImage"
                  />
                )}
                <div className="payloadInfo">
                  <h3>{res.payloadflight.payload.name}</h3>
                  {res.payloadflight.payload.type?.name && (
                    <span className="divSmall">
                      Type: {res.payloadflight.payload.type.name}
                    </span>
                  )}
                  {res.payloadflight.amount !== null && (
                    <span className="divSmall">
                      Quantity: {res.payloadflight.amount}
                    </span>
                  )}
                  {res.payloadflight.destination && (
                    <span className="divSmall">
                      Destination: {res.payloadflight.destination}
                    </span>
                  )}
                  {res.payloadflight.payload.mass !== null && (
                    <span className="divSmall">
                      Mass: {res.payloadflight.payload.mass} kg
                    </span>
                  )}
                  {res.payloadflight.payload.description && (
                    <p>{res.payloadflight.payload.description}</p>
                  )}
                </div>

                {res.payloadflight.payload.manufacturer && (
                  <div className="payloadManufacturer divSmall">
                    <strong>Manufacturer:</strong>{" "}
                    {res.payloadflight.payload.manufacturer.name}
                    {res.payloadflight.payload.manufacturer.abbrev &&
                      ` (${res.payloadflight.payload.manufacturer.abbrev})`}
                  </div>
                )}

                {res.payloadflight.payload.operator && (
                  <div className="payloadOperator divSmall">
                    <strong>Operator:</strong>{" "}
                    {res.payloadflight.payload.operator.name}
                    {res.payloadflight.payload.operator.abbrev &&
                      ` (${res.payloadflight.payload.operator.abbrev})`}
                  </div>
                )}

                {res.payloadflight.launch && res.payloadflight.launch.id && (
                  <Link
                    to={`/Launch/${res.payloadflight.launch.id}`}
                    className="link"
                  >
                    View launch details
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </article>
    </>
  );
}
export default Landing;
