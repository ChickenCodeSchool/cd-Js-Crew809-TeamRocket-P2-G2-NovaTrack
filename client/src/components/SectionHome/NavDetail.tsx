import "./navDetail.css";

interface NavDetailProps {
  isExpanded: boolean;
}

function NavDetail({ isExpanded }: NavDetailProps) {
  return (
    <div className="navDetailcontainer">
      <div className={isExpanded ? "isOpen navDetail" : "isClosed navDetail"}>
        <button type="button" className="navChilds">
          Latest
        </button>
        <button type="button" className="navChilds">
          Choose date
        </button>
        <input
          className="searchBar navChilds"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
export default NavDetail;
