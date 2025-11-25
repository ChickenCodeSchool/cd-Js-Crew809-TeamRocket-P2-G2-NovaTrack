import "./toggleBtn.css";

type toggleBtnProps = {
  onClick: () => void;
  isExpanded: boolean;
};

function toggleBtn({ onClick, isExpanded }: toggleBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isExpanded ? "btnIsOpen toggleBtn" : "btnIsClosed toggleBtn"}
    >
      <span className="toggleText">----------</span>
    </button>
  );
}

export default toggleBtn;
