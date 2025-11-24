import { useEffect, useState } from "react";
import "./launchContent.css";
import { Link } from "react-router";
import Loader from "../Loader/Loader";
import ErrorComp from "../ErrorComp/ErrorComp";

type LaunchContentProps = {
  filterLaunches: string;
  searchLaunches: string;
};

type items = {
  name: string;
  id: number;
  net: string;
  net_precision: {
    abbrev: string;
  };
  status: {
    abbrev: string;
  };
};
function LaunchContent({ filterLaunches, searchLaunches }: LaunchContentProps) {
  const [res, setRes] = useState<items[]>([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/launches?limit=8&?mode=list${filterLaunches}${searchLaunches}`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setRes(data.results))
      .catch((error) => setErr(error.message));
  }, [filterLaunches, searchLaunches]);

  if (err) {
    return <ErrorComp statNumb={err} big={false} />;
  }
  if (res.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {res.map((el) => (
        <div className="singleLaunchContent" key={el.id}>
          <span>{el?.name}</span>
          <span>
            NET : {new Date(el.net).toLocaleString()} (
            {el.net_precision?.abbrev})
          </span>
          <span>{el?.status?.abbrev}</span>
          <Link to={`/Launch/${el.id}`} className="link">
            View details
          </Link>
        </div>
      ))}
    </>
  );
}

export default LaunchContent;
