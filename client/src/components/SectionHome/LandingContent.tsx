import { useEffect, useState } from "react";
import "./landingContent.css";
import { Link } from "react-router";
import Loader from "../Loader/Loader";
import ErrorComp from "../ErrorComp/ErrorComp";

type LandingContentProps = {
  filterLanding: string;
  searchLanding: string;
};

type items = {
  name: string;
  id: number;
  attempt: boolean;
  success: boolean;
  type: {
    name: string;
  };
  landing_location: {
    name: string;
  };
};
function LandingContent({ filterLanding, searchLanding }: LandingContentProps) {
  const [res, setRes] = useState<items[]>([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/landings/?limit=8&?mode=list${filterLanding}${searchLanding}`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setRes(data.results))
      .catch((error) => setErr(error.message));
  }, [filterLanding, searchLanding]);

  if (err) {
    return <ErrorComp statNumb={err} big={false} />;
  }
  if (res.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {res.map((el) => (
        <div className="singleLandingContent" key={el.id}>
          <span>📍 {el.landing_location.name}</span>
          <span>{el?.type.name}</span>
          {el.attempt !== null ? (
            <span>Attempted : {el.attempt ? "✅" : "❌"}</span>
          ) : (
            <span>-</span>
          )}
          {el.success !== null ? (
            <span>Succeed : {el.attempt ? "✅" : "❌"}</span>
          ) : (
            <span>-</span>
          )}
          <Link to={`/Landing/${el.id}`} className="link">
            View details
          </Link>
        </div>
      ))}
    </>
  );
}

export default LandingContent;
