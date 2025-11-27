import "./landingPage.css";
function LandingPage() {
  return (
    <div className="landingPage-container">
      <svg
        viewBox="0 0 1900 600"
        width="1900"
        height="600"
        className="landingPage-svg"
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
        <g id="landingPage-outsideShadows">
          <ellipse
            className="landingPage-el"
            cx="950"
            cy="570"
            ry="200"
            rx="700"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="landingPage-el"
            cx="950"
            cy="510"
            ry="160"
            rx="450"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="landingPage-el"
            cx="950"
            cy="480"
            ry="150"
            rx="200"
            r="190"
            filter="url(#blur)"
          />

          <ellipse
            className="landingPage-elb"
            cx="950"
            cy="900"
            ry="700"
            rx="500"
            r="190"
            filter="url(#blur)"
          />
          <ellipse
            className="landingPage-el1"
            cx="950"
            cy="520"
            ry="150"
            rx="250"
            r="190"
            filter="url(#blur)"
          />
        </g>
        <circle className="landingPage-bigcircle" cx="950" cy="3400" r="3000" />
        <circle
          className="landingPage-bigcircle2"
          cx="950"
          cy="4449"
          r="4040"
          mask="url(#maskcircle)"
          filter="url(#innerDropshadow)"
        />
        <g id="landingPage-innerShadow" mask="url(#maskcircle)">
          <ellipse
            className="landingPage-el1"
            cx="950"
            cy="320"
            ry="100"
            rx="550"
            r="190"
            filter="url(#blur2)"
          />
          <ellipse
            className="landingPage-el2"
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
export default LandingPage;
