import "./ISSTrack.css";
("use client");
import Earth from "../../components/Earth/Earth";
import issImg from "../../assets/images/ISSIMAGE.png";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import ISSinfos from "./ISSinfos";

function ISSTrack() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div className="ISSContainer">
        {/* <ISSinfos /> */}
        <motion.div
          className="motionDiv"
          animate={{
            x: `${-x / 25}px`,
            y: `${-y / 25}px`,
          }}
          transition={{
            ease: "backOut",
          }}
        >
          <img src={issImg} className="issImg" alt="iss" />
        </motion.div>
        <Earth className="svgContainerISS" />
      </div>
    </>
  );
}
export default ISSTrack;
