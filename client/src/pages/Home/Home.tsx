import EventsContent from "../../components/SectionHome/EventsContent";
import ExpeditionContent from "../../components/SectionHome/ExpeditionContent";
import LaunchContent from "../../components/SectionHome/LaunchContent";
import NavDetail from "../../components/SectionHome/NavDetail";
import SectionHome from "../../components/SectionHome/SectionHome";
import "./Home.css";
import { useState, useRef } from "react";

function Home() {
  const [isExpandedLaunches, setIsExpandedLaunches] = useState(false);
  const [searchLaunches, setSearchLaunches] = useState("");
  const [filterLaunches, setFilterLaunches] = useState(
    "&ordering=-last_updated"
  );

  const [isExpandedEvents, setIsExpandedEvents] = useState(false);
  const [filterEvents, setFilterEvents] = useState("&ordering=-last_updated");
  const [searchEvents, setSearchEvents] = useState("");

  const [filterExpe, setFilterExpe] = useState("&ordering=-last_updated");
  const [searchExpe, setSearchExpe] = useState("");
  const [isExpandedExpe, setIsExpandedExpe] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <NavDetail
        isExpandedLaunches={isExpandedLaunches}
        isExpandedEvents={isExpandedEvents}
        isExpandedExpe={isExpandedExpe}
        setFilterLaunches={setFilterLaunches}
        setSearchLaunches={setSearchLaunches}
        setFilterEvents={setFilterEvents}
        setSearchEvents={setSearchEvents}
        setFilterExpe={setFilterExpe}
        setSearchExpe={setSearchExpe}
      />
      <SectionHome
        isExpanded={isExpandedLaunches}
        setIsExpanded={setIsExpandedLaunches}
        title="Launches"
        sectionRef={sectionRef}
        childClass="allLaunchContent firstsect"
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
      <SectionHome
        isExpanded={isExpandedExpe}
        setIsExpanded={setIsExpandedExpe}
        title="Expeditions"
        sectionRef={sectionRef}
        childClass="allExpeContent"
      >
        <ExpeditionContent filterExpe={filterExpe} searchExpe={searchExpe} />
      </SectionHome>
    </>
  );
}
export default Home;
