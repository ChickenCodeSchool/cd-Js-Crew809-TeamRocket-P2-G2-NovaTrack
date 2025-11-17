import { useEffect, useState } from "react";
import "./eventsContent.css";

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
  const [more, setMore] = useState(4);

  const [res, setRes] = useState<items[]>([]);

  useEffect(() => {
    fetch(
      `https://lldev.thespacedevs.com/2.3.0/events?limit=${more}&?mode=list${filterEvents}${searchEvents}`,
    )
      .then((response) => response.json())
      .then((data) => setRes(data.results));
  }, [more, filterEvents, searchEvents]);

  return res.length > 0 ? (
    <>
      {res.map((el) => (
        <div key={el.id} className="singleEventsContent">
          <div className="singleEventsContent-img">
            <img src={el.image.image_url} alt={el.name} />
          </div>
          <span>{el.name}</span>
          <span>📍{el.location}</span>
          <button type="button">view details</button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setMore(more + 4);
        }}
      >
        +
      </button>
    </>
  ) : (
    <p>Loading..</p>
  );
}

export default EventsContent;
