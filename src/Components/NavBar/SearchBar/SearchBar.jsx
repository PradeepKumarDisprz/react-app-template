import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faXmark,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../../Context/GlobalContext";
import { apiActions } from "../../../Reducer/TriggerApiReducer";

const SearchBar = ({ setIsNotSearched,setNavigateCount,navCount }) => {

  const {apiDispatch,setSearch,setMonthView}=useContext(GlobalContext);
  const [searchMenu, setMenu] = useState(false);
  const [searchInput,setSearchInput]=useState({offSet:0,fetchCount:7,searchTitle:"",startDate:"",endDate:""})
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchInput.searchTitle.replace(/\s/g,"")!=="")
    {
    const titleSpaces=searchInput.searchTitle.replace(/\s/g," ")
    setSearchInput({...searchInput,searchTitle:"",startDate:"",endDate:""})
    apiDispatch({type:apiActions.SEARCH_EVENT,payload:searchInput});
      setMenu(false)
      setIsNotSearched(true)
      setSearch(true)
  };
}

  return (
    <div className="search-bar">
      
      <div className="go-back" onClick={()=>{setIsNotSearched(true);setSearch(false)}}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </div>

      <form className="search-event" onSubmit={handleSubmit} autoComplete="on">
       { searchInput.searchTitle &&<button type="submit" >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      }

        <input type="text" className="search-input" value={searchInput.searchTitle} placeholder="Search for event" required onChange={(e) => { setSearchInput({...searchInput,searchTitle:e.target.value})}} autoComplete="on"/>
        {searchInput.searchTitle && (<FontAwesomeIcon icon={faXmark} className="search-reset"onClick={() => {setSearchInput({searchTitle:"",startDate:"",endDate:""})}} /> )}
        <FontAwesomeIcon icon={faCaretDown} className="search-menu" onClick={() => setMenu(!searchMenu)}/>

        {
        searchMenu && (
          <div className="search-with-options">
            <div className="search-label">Search with Date</div>
            
            <div className="start-date">
              <div className="date-label">
              <span className="date-label">From</span>
              <input type="date" name="start date" value={searchInput.startDate} onChange={(e) =>{ setSearchInput({...searchInput,startDate:e.target.value})}} className="date-inp" />
              </div>

              <div>
              <span className="date-label">to</span>
              <input type="date" value={searchInput.endDate} name="End date" onChange={(e)=>{ setSearchInput({...searchInput,endDate:e.target.value})}} className="date-inp" />
              </div>
            </div>

          </div>
        )
        }
      </form>
    </div>
  );
};

export default SearchBar;
