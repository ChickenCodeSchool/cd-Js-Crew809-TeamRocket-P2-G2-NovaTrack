import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import "./mouseAnim.css";

function MouseAnim() {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      animate={{
        translate: `${x - 1327}px ${y - 2390}px`,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
      }}
    >
      <svg
        width="2390"
        height="1327"
        viewBox="0 0 2390 1327"
        className="mouseAnim"
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="100" />
          </filter>
        </defs>
        <ellipse
          cx="746"
          cy="387.5"
          rx="484"
          ry="314.5"
          fill="#A551AD"
          fill-opacity="0.33"
          filter="url(#blur)"
        />
        <ellipse
          cx="1073"
          cy="888"
          rx="510"
          ry="310"
          fill="#735e9eff"
          fill-opacity="0.44"
          filter="url(#blur)"
        />
        <ellipse
          cx="1608.5"
          cy="543"
          rx="512.5"
          ry="345"
          fill="#7072E7"
          filter="url(#blur)"
          fill-opacity="0.31"
        />
      </svg>
    </motion.div>
  );
}
export default MouseAnim;
