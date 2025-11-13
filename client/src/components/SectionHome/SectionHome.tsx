import ContentNews from "./ContentNews";

import "./SectionHome.css";
import Seemore from "./Seemore";

type SectionHomeProps = {
  title: string;
  children?: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement | null>;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

function SectionHome({
  title,
  isExpanded,
  setIsExpanded,
  sectionRef,
}: SectionHomeProps) {
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    });
    console.log(isExpanded);
  };
  return (
    <>
      <h3>{title}</h3>
      <Seemore onClick={handleClick} />
      <section ref={sectionRef}>
        <ContentNews />
      </section>
    </>
  );
}
export default SectionHome;
