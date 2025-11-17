import "./SectionHome.css";
import ToggleBtn from "./toggleBtn";

type SectionHomeProps = {
  title: string;
  children?: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement | null>;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  childClass: string;
};

function SectionHome({
  title,
  isExpanded,
  setIsExpanded,
  sectionRef,
  children,
  childClass,
}: SectionHomeProps) {
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <section
        className={isExpanded ? "sectionHomeIsOpen sectionHome" : "sectionHome"}
      >
        <h3>{title}</h3>
        <ToggleBtn onClick={handleClick} isExpanded={isExpanded} />
        <section
          ref={sectionRef}
          className={
            isExpanded
              ? `allContentIsOpen ${childClass} allContent`
              : `${childClass} allContent`
          }
        >
          {children}
        </section>
      </section>
    </>
  );
}
export default SectionHome;
