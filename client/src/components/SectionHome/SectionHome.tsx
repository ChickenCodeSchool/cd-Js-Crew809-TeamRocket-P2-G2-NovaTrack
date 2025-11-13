import ContentNews from "./ContentNews";

import "./SectionHome.css";
import ToggleBtn from "./toggleBtn";

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
      <section className="sectionHome">
        <h3>{title}</h3>
        <ToggleBtn onClick={handleClick} isExpanded={isExpanded} />
        <section ref={sectionRef}>
          <ContentNews />
        </section>
      </section>
    </>
  );
}
export default SectionHome;
