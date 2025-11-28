import "./earth.css";

type earthProps = {
  className: string;
};
function Earth({ className }: earthProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1900 600"
        width="1900"
        height="600"
        className="earthSvg"
      >
        <defs>
          <mask id="maskcircle" maskUnits="userSpaceOnUse">
            <circle cx="950" cy="3400" r="3000" fill="var(--text-color)" />
          </mask>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="50" />
          </filter>
          <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="innerDropshadow">
            <feFlood floodColor="var(--text-color)" />
            <feComposite operator="out" in2="SourceGraphic" />
            <feMorphology operator="dilate" radius="1" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite operator="atop" in2="SourceGraphic" />
          </filter>
        </defs>
        <g id="outsideShadows">
          <ellipse
            className="el"
            cx="950"
            cy="570"
            ry="200"
            rx="700"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="el"
            cx="950"
            cy="510"
            ry="160"
            rx="450"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="el"
            cx="950"
            cy="480"
            ry="150"
            rx="200"
            r="190"
            filter="url(#blur)"
          />

          <ellipse
            className="elb"
            cx="950"
            cy="900"
            ry="700"
            rx="500"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="el1"
            cx="950"
            cy="520"
            ry="150"
            rx="250"
            r="190"
            filter="url(#blur)"
          />
        </g>
        <circle className="bigcircle" cx="950" cy="3400" r="3000" />
        <circle
          className="bigcircle2"
          cx="950"
          cy="4449"
          r="4040"
          mask="url(#maskcircle)"
          filter="url(#innerDropshadow)"
        />
        <g id="innerShadow" mask="url(#maskcircle)">
          <ellipse
            className="el1"
            cx="950"
            cy="320"
            ry="100"
            rx="550"
            r="190"
            filter="url(#blur2)"
          />
          <ellipse
            className="el2"
            cx="950"
            cy="400"
            ry="50"
            rx="550"
            r="190"
            filter="url(#blur2)"
          />
        </g>
        <rect x="0" y="660" width="1900" height="200" />
      </svg>
    </div>
  );
}
export default Earth;
