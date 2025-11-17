import EventsContent from "../../components/SectionHome/EventsContent";
import LaunchContent from "../../components/SectionHome/LaunchContent";
import NavDetail from "../../components/SectionHome/NavDetail";
import SectionHome from "../../components/SectionHome/SectionHome";
import "./Home.css";
import { useState, useRef } from "react";

function Home() {
  const [isExpandedLaunches, setIsExpandedLaunches] = useState(false);
  const [isExpandedEvents, setIsExpandedEvents] = useState(false);
  const [filterLaunches, setFilterLaunches] = useState(
    "&ordering=-last_updated",
  );
  const [searchLaunches, setSearchLaunches] = useState("");
  const [filterEvents, setFilterEvents] = useState("&ordering=-last_updated");
  const [searchEvents, setSearchEvents] = useState("");

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <NavDetail
        isExpandedLaunches={isExpandedLaunches}
        isExpandedEvents={isExpandedEvents}
        setFilterLaunches={setFilterLaunches}
        setSearchLaunches={setSearchLaunches}
        setFilterEvents={setFilterEvents}
        setSearchEvents={setSearchEvents}
      />
      <SectionHome
        isExpanded={isExpandedLaunches}
        setIsExpanded={setIsExpandedLaunches}
        title="Launches"
        sectionRef={sectionRef}
        childClass="allLaunchContent"
      >
        <LaunchContent
          filterLaunches={filterLaunches}
          searchLaunches={searchLaunches}
        />
      </SectionHome>
      <SectionHome
        isExpanded={isExpandedEvents}
        setIsExpanded={setIsExpandedEvents}
        title="Events"
        sectionRef={sectionRef}
        childClass="allEventsContent"
      >
        <EventsContent
          filterEvents={filterEvents}
          searchEvents={searchEvents}
        />
      </SectionHome>
    </>
  );
}
export default Home;
