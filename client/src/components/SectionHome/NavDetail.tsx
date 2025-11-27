import "./navDetail.css";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
interface NavDetailProps {
  isExpandedEvents: boolean;
  isExpandedLaunches: boolean;
  setFilterLaunches: React.Dispatch<React.SetStateAction<string>>;
  setSearchLaunches: React.Dispatch<React.SetStateAction<string>>;
  setFilterEvents: React.Dispatch<React.SetStateAction<string>>;
  setSearchEvents: React.Dispatch<React.SetStateAction<string>>;
  isExpandedExpe: boolean;
  setFilterExpe: React.Dispatch<React.SetStateAction<string>>;
  setSearchExpe: React.Dispatch<React.SetStateAction<string>>;
  isExpandedLanding: boolean;
  setFilterLanding: React.Dispatch<React.SetStateAction<string>>;
  setSearchLanding: React.Dispatch<React.SetStateAction<string>>;
}

function NavDetail({
  isExpandedLaunches,
  setFilterLaunches,
  setSearchLaunches,
  isExpandedEvents,
  setSearchEvents,
  setFilterEvents,
  isExpandedExpe,
  setSearchExpe,
  setFilterExpe,
  isExpandedLanding,
  setSearchLanding,
  setFilterLanding,
}: NavDetailProps) {
  const handleLastestClick = () => {
    if (isExpandedLaunches === true) {
      setFilterLaunches("&ordering=-last_updated");
    }
    if (isExpandedEvents === true) {
      setFilterEvents("&ordering=-name");
    }
    if (isExpandedExpe === true) {
      setFilterExpe("&ordering=-name");
    }
    if (isExpandedLanding === true) {
      setFilterLanding("&ordering=-name");
    }
  };

  const handleSearch = (el: React.ChangeEvent<HTMLInputElement>) => {
    if (isExpandedLaunches === true) {
      setSearchLaunches(`&search=${el.target.value}`);
    }
    if (isExpandedEvents === true) {
      setSearchEvents(`&search=${el.target.value}`);
    }
    if (isExpandedExpe === true) {
      setSearchExpe(`&search=${el.target.value}`);
    }
    if (isExpandedLanding === true) {
      setSearchLanding(`&search=${el.target.value}`);
    }
  };
  return (
    <nav className="navDetailcontainer">
      <ul
        className={
          isExpandedLaunches ||
          isExpandedEvents ||
          isExpandedExpe ||
          isExpandedLanding
            ? "isOpen navDetail"
            : "isClosed navDetail"
        }
      >
        <li>
          <button
            type="button"
            className="navChilds"
            onClick={handleLastestClick}
          >
            Latest
          </button>
        </li>
        <li>
          <input
            className="searchBar navChilds"
            type="text"
            placeholder="Search..."
            onChange={(el) => {
              handleSearch(el);
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
export default NavDetail;
