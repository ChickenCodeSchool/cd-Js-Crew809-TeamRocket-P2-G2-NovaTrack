import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../Loader/Loader";
import ErrorComp from "../ErrorComp/ErrorComp";
import "./expeditionContent.css";
type ExpeContentProps = {
  filterExpe: string;
  searchExpe: string;
};

type items = {
  name: string;
  id: number;
  start: string;
  end: string;
  mission_patches: {
    name: string;
  };
};
function ExpeditionContent({ filterExpe, searchExpe }: ExpeContentProps) {
  const [res, setRes] = useState<items[]>([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/expeditions/?limit=8&?mode=list${filterExpe}${searchExpe}`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setRes(data.results))
      .catch((error) => setErr(error.message));
  }, [filterExpe, searchExpe]);

  if (err) {
    return <ErrorComp statNumb={err} big={false} />;
  }
  if (res.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {res.map((el) => (
        <div className="singleExpeContent" key={el.id}>
          <span>{el?.name}</span>

          <span>FROM : {new Date(el.start).toLocaleString()}</span>
          <span> TO : {new Date(el?.end).toLocaleString()}</span>

          <span>{el.mission_patches.name}</span>
          <Link to={`/Expedition/${el.id}`} className="link">
            View details
          </Link>
        </div>
      ))}
    </>
  );
}

export default ExpeditionContent;
