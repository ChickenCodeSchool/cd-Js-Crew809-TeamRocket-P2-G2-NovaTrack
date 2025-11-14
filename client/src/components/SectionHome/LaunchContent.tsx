import { useEffect, useState } from "react";
import "./launchContent.css";

function LaunchContent() {
  const [res, setRes] = useState<any>(null);

  useEffect(() => {
    fetch("https://lldev.thespacedevs.com/2.3.0/launches/?mode=list")
      .then((response) => response.json())
      .then((data) => setRes(data));
  }, []);
  useEffect(() => {
    console.log(res);
  }, [res]);
  return res ? (
    res.results.map((el, i) => (
      <div className="singleLaunchContent" key={i}>
        <span>{el.name}</span>
        <span>
          NET : {el.net} ({el.net_precision.abbrev})
        </span>
        <span>{el.status.abbrev}</span>
        <button type="button">view details</button>
      </div>
    ))
  ) : (
    <p>Loading..</p>
  );
}

export default LaunchContent;
