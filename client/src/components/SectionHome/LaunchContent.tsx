import { useEffect, useState } from "react";
import "./launchContent.css";

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
  const [more, setMore] = useState(5);
  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/launches?limit=${more}&?mode=list${filterLaunches}${searchLaunches}`,
    )
      .then((response) => response.json())
      .then((data) => setRes(data.results));
    console.log(`${filterLaunches}${searchLaunches}`);
  }, [filterLaunches, searchLaunches, more]);

  return res.length > 0 ? (
    <>
      {res.map((el) => (
        <div className="singleLaunchContent" key={el.id}>
          <span>{el.name}</span>
          <span>
            NET : {el.net} ({el.net_precision.abbrev})
          </span>
          <span>{el.status.abbrev}</span>
          <button type="button">view details</button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setMore(more + 3);
        }}
      >
        +
      </button>
    </>
  ) : (
    <p>Loading..</p>
  );
}

export default LaunchContent;
