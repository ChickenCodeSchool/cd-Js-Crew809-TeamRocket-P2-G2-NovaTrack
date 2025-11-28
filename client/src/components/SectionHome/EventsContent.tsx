import { useEffect, useState } from "react";
import "./eventsContent.css";
import { Link } from "react-router";
import Loader from "../Loader/Loader";
import ErrorComp from "../ErrorComp/ErrorComp";

type EventsContentProps = {
  filterEvents: string;
  searchEvents: string;
};

type items = {
  id: number;
  name: string;
  image: {
    image_url: string;
  };
  location: string;
};

function EventsContent({ filterEvents, searchEvents }: EventsContentProps) {
  const [res, setRes] = useState<items[]>([]);
  const [err, setErr] = useState(null);
  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/events?limit=8&?mode=list${filterEvents}${searchEvents}`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setRes(data.results))
      .catch((error) => setErr(error.message));
  }, [filterEvents, searchEvents]);

  if (err) {
    return <ErrorComp statNumb={err} big={false} />;
  }
  if (res.length === 0) {
    return <Loader />;
  }
  return res.length > 0 ? (
    <>
      {res.map((el) => (
        <div key={el.id} className="singleEventsContent">
          <div className="singleEventsContent-img">
            <img src={el.image.image_url} alt={el.name} />
          </div>
          <span>{el.name}</span>
          <span>📍{el.location}</span>
          <Link to={`/Events/${el.id}`} className="link">
            View details
          </Link>
        </div>
      ))}
    </>
  ) : (
    <Loader />
  );
}

export default EventsContent;
