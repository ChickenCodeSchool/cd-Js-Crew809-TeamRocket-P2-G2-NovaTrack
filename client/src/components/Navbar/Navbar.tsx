import { Link } from "react-router";
import Logo from "../Logo/Logo";
import "./navbar.css";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
type SwitchProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navbar({ dark, setDark }: SwitchProps) {
  return (
    <>
      <nav className="primNav">
        <Logo />
        <ul>
          <li>
            <Link to={"./Home"}>Home</Link>
          </li>

          <li>
            <Link to={"./ISSTrack"}>ISS Track</Link>
          </li>
          <li>
            <SwitchBtn dark={dark} setDark={setDark} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
