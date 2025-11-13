import "./navDetail.css";

interface NavDetailProps {
  isExpanded: boolean;
}

function NavDetail({ isExpanded }: NavDetailProps) {
  return (
    <div className="navDetailcontainer">
      <div className={isExpanded ? "isOpen navDetail" : "isClosed navDetail"}>
        <button type="button">Latest</button>
        <button type="button">Choose date</button>
        <input className="searchBar" type="text" placeholder="Search..." />
      </div>
    </div>
  );
}
export default NavDetail;
