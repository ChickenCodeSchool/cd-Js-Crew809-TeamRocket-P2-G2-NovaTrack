import "./notFound.css";

import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import useElementSize from "../../utils/useElementSize";
import { Link } from "react-router";
import Earth from "../../components/Earth/Earth";

function NotFound() {
  const { x, y } = useMousePosition();
  const { width, height } = useElementSize(".movingDiv");
  return (
    <>
      <div className="errorBody">
        <motion.div
          className="movingDiv"
          animate={{
            translate: `${x - width / 2}px ${y - (height / 2 + 50)}px`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
          }}
        >
          <span>ERROR</span>
          <span className="status">404</span>
          <span>Uh oh! Looks like you got lost...</span>
          <button type="button">Back to home</button>
        </motion.div>
        <Earth />
        <div className="realBtn">
          <span>Isn't that funny? </span>
          <Link className="link " to="/home">
            Back to home (for real)
          </Link>
        </div>
      </div>
    </>
  );
}
export default NotFound;
