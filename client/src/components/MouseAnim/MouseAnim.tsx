import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import "./mouseAnim.css";

function MouseAnim() {
  const { x, y } = useMousePosition();
  return (
    <motion.div
      className="mouseAnim"
      animate={{
        x: x / 2 - 1327 / 2,
        y: y / 2 - 2390 / 5,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.5,
      }}
    >
      <svg
        width="2390"
        height="1327"
        viewBox="0 0 2390 1327"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="100" />
          </filter>
        </defs>
        <ellipse
          cx="746"
          cy="395.591"
          rx="484"
          ry="316.171"
          fill="#9E7BFA"
          fill-opacity="0.5"
          filter="url(#blur)"
        />
        <ellipse
          cx="979.5"
          cy="753.986"
          rx="333.5"
          ry="288.525"
          fill="#4E25D4"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="1748.5"
          cy="426.253"
          rx="333.5"
          ry="288.525"
          fill="#4E25D4"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="367.5"
          cy="1010.34"
          rx="333.5"
          ry="288.525"
          fill="#7D68C1"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="1364.5"
          cy="426.253"
          rx="209.5"
          ry="346.833"
          fill="#C7B8FB"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="1107.5"
          cy="520.752"
          rx="174.5"
          ry="94.4995"
          fill="#C7B8FB"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="513.037"
          cy="346.473"
          rx="513.037"
          ry="346.473"
          transform="matrix(0.895197 0.445671 -0.441894 0.897067 1365.21 395.089)"
          fill="#2107C0"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="156.034"
          cy="513.708"
          rx="156.034"
          ry="513.708"
          transform="matrix(-0.00428681 -0.999991 0.999991 -0.00433248 1383.34 316.516)"
          fill="#2107C0"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
        <ellipse
          cx="827"
          cy="1010.84"
          rx="588"
          ry="108.071"
          fill="#5F32DE"
          filter="url(#blur)"
          fill-opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
export default MouseAnim;
