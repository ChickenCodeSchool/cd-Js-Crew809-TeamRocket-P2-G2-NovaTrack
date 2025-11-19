// import { useEffect, useState } from "react";
import "./ISSTrack.css";
import Earth from "../../components/Earth/Earth";
import issImg from "../../assets/images/ISSIMAGE.png";
function ISSTrack() {
  // const [res, setRes] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3200/iss-now")
  //     .then((response) => response.json())
  //     .then((data) => setRes(data));
  // }, []);
  return (
    <>
      <p>ISSTrack</p>
      <img src={issImg} className="issImg" alt="iss" />
      <Earth />
    </>
  );
}
export default ISSTrack;
