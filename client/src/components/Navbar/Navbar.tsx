import { Link } from "react-router";
import Logo from "../Logo/Logo";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Logo />
        <ul>
          <li>
            <Link to={"./Home"}>Home</Link>
          </li>
          <li>
            <Link to="/home#news">Events</Link>
          </li>
          <li>
            <Link to="/home#launch">Launches</Link>
          </li>
          <li>
            <Link to={"./ISSTrack"}>ISS Track</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
