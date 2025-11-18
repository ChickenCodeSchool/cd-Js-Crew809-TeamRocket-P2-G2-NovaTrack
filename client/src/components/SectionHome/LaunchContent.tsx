import { useEffect, useState } from "react";
import "./launchContent.css";
import { Link } from "react-router";

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
  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/launches?limit=8&?mode=list${filterLaunches}${searchLaunches}`,
    )
      .then((response) => response.json())
      .then((data) => setRes(data.results));
    console.log(`${filterLaunches}${searchLaunches}`);
  }, [filterLaunches, searchLaunches]);

  return res.length > 0 ? (
    <>
      {res.map((el) => (
        <div className="singleLaunchContent" key={el.id}>
          <span>{el.name}</span>
          <span>
            NET : {el.net} ({el.net_precision.abbrev})
          </span>
          <span>{el.status.abbrev}</span>
          <Link to={`/Launch/${el.id}`} className="link">
            View details
          </Link>
        </div>
      ))}
    </>
  ) : (
    <p>Loading..</p>
  );
}

export default LaunchContent;
