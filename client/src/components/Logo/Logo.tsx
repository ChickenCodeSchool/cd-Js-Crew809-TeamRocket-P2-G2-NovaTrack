import "./logo.css";
export default function Logo() {
  const count = 10;
  const step = 180 / count;

  return (
    <div className="logo">
      <svg viewBox="-500 -500 1000 1000">
        <circle r="450" />

        {Array.from({ length: count }, (_, i) => {
          const start = step * i;
          const end = start + step;

          return (
            <circle
              key={i}
              className="meridian"
              r="450"
              style={{
                "--start": `${start}deg`,
                "--end": `${end}deg`,
                "--rotateY": `${start}deg`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
