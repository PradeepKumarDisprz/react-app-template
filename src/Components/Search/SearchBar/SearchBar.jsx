import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../../Context/GlobalContext";

const SearchBar = ({ setIsNotSearched }) => {

  const {searchInput,setSearchInput}=useContext(GlobalContext);
  const [searchClick, setClick] = useState(false);
  const [searchMenu, setMenu] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(searchDate.startDate,searchDate.endDate);
    setSearchTitle("");
    setSearchDate("")
    const searchData={searchTitle,searchDate};
    setSearchInput(searchData);
    console.log(searchData);
    console.log(searchInput);
    
    setTimeout(() => {
      setIsNotSearched(false);
      navigate("/searchresult");
    }, 1000);
  };

  return (
    <div className="search-bar">
      {}

      <form className="search-event" onSubmit={handleSubmit} autoComplete="on">
        <button type="submit" onClick={() => setClick(!searchClick)}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>

        <input
          type="text"
          className="search-input"
          value={searchTitle}
          placeholder="Search for event"
          required
          onChange={(e) => setSearchTitle(e.target.value)}
          autoComplete="on"
        />
        {searchTitle && (
          <FontAwesomeIcon
            icon={faXmark}
            className="search-reset"
            onClick={() => setSearchTitle("")}
          />
        )}
        <FontAwesomeIcon
          icon={faCaretDown}
          className="search-menu"
          onClick={() => setMenu(!searchMenu)}
        />

        {searchMenu && (
          <div className="search-with-options">
            <div className="search-label">Search with Date</div>
            <div className="start-date">
              {/* <div className="date-label"> */}
              {/* <span className="date-label">From</span> */}
              <input
                type="date"
                name="start date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="date-inp"
              />
              {/* </div> */}

              {/* <div>
              <span className="date-label">to</span>
              <input type="date" name="End date" onChange={(e)=>setEndDate(e.target.value)} className="date-inp" />
            </div> */}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
