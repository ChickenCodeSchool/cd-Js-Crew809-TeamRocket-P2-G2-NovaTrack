type SeemoreProps = {
  onClick: () => void;
};

function Seemore({ onClick }: SeemoreProps) {
  return (
    <button type="button" onClick={onClick}>
      See more
    </button>
  );
}

export default Seemore;
