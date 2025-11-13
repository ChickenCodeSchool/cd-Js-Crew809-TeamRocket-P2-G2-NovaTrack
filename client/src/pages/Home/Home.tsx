import NavDetail from "../../components/SectionHome/NavDetail";
import SectionHome from "../../components/SectionHome/SectionHome";
import "./Home.css";
import { useState, useRef } from "react";

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <NavDetail isExpanded={isExpanded} />
      <SectionHome
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        title="News"
        sectionRef={sectionRef}
      />
    </>
  );
}
export default Home;
