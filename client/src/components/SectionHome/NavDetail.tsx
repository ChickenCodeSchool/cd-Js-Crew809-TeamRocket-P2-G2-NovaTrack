import "./navDetail.css";

interface NavDetailProps {
  isExpanded: boolean;
}

function NavDetail({ isExpanded }: NavDetailProps) {
  return (
    // <nav>{isExpanded && <input type="text" placeholder="Search..." />}</nav>
    <div className={isExpanded ? "isOpen navDetail" : "isClosed navDetail"}>
      <button type="button">Latest</button>
      <input className="searchBar" type="text" placeholder="Search..." />
    </div>
  );
}
export default NavDetail;
