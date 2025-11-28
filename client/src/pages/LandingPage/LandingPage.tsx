import { Link } from "react-router";
import Earth from "../../components/Earth/Earth";
import MouseAnim from "../../components/MouseAnim/MouseAnim";
import "./landingPage.css";
function LandingPage() {
  const splitText = (text: string, nature: number) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        style={{
          animationDelay: `${i * 0.05 + nature}s`,
          display: "inline-block",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="landingPage-container">
      {/* <Earth className="svgContainerISS" /> */}
      <MouseAnim />
      <div className="welcomeContainer">
        <div className="welcome">
          <span className="welcome1">
            {splitText("Welcome to NovaTrack", 2.5)}
          </span>
          <br />
          <span className="welcome2">
            {splitText("Your gateway to space news", 2.5)}
          </span>
          <Link to="/home" className="link welcomeDisc">
            Discover
          </Link>
        </div>
      </div>
      <Link to="/home" className="welcomeSkip">
        ≫ Skip to home
      </Link>
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
      <div className="glassy2" />
      <div className="glassy" />
    </div>
  );
}
export default LandingPage;
