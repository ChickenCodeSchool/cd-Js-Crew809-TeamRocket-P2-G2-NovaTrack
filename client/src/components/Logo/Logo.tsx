import "./logo.css";

interface meridianStyle extends React.CSSProperties {
  "--start": string;
  "--end": string;
  "--rotateY": string;
}

export default function Logo() {
  const count = 8;
  const step = 180 / count;

  return (
    <div className="logo">
      <svg
        viewBox="-500 -500 1000 1000"
        aria-label="Rotating meridians sphere animation"
      >
        <title>Rotating Meridians</title>
        <circle r="450" />

        {Array.from({ length: count }, (_, i) => {
          const start = step * i;
          const end = start + step;

          return (
            <circle
              key={`meridian-${start}-${end}`}
              className="meridian"
              r="450"
              style={
                {
                  "--start": `${start}deg`,
                  "--end": `${end}deg`,
                  "--rotateY": `${start}deg`,
                } as meridianStyle
              }
            />
          );
        })}
      </svg>
    </div>
  );
}
