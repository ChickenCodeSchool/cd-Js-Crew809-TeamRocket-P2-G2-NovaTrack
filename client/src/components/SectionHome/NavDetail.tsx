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
}

function NavDetail({
  isExpandedEvents,
  isExpandedLaunches,
  setFilterLaunches,
  setSearchLaunches,
  setSearchEvents,
  setFilterEvents,
}: NavDetailProps) {
  // const [selectedDate, setStartDate] = useState<Date | null>(
  //   new Date("2014/02/08"),
  // );
  // const [endDate, setEndDate] = useState<Date | null>(new Date("2014/02/10"));

  const handleLastestClick = () => {
    if (isExpandedLaunches === true) {
      setFilterLaunches("&ordering=-last_updated");
    }
    if (isExpandedEvents === true) {
      setFilterEvents("&ordering=-name");
    }
  };

  const handleSearch = (el: React.ChangeEvent<HTMLInputElement>) => {
    if (isExpandedLaunches === true) {
      setSearchLaunches(`&search=${el.target.value}`);
    }
    if (isExpandedEvents === true) {
      setSearchEvents(`&search=${el.target.value}`);
    }
  };
  return (
    <nav className="navDetailcontainer">
      <ul
        className={
          isExpandedLaunches || isExpandedEvents
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
        {/* <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setStartDate(date)}
            selectsStart
            startDate={selectedDate}
            endDate={endDate}
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            selectsEnd
            startDate={selectedDate}
            endDate={endDate}
            minDate={selectedDate}
          />
        </div> */}
      </ul>
    </nav>
  );
}
export default NavDetail;
