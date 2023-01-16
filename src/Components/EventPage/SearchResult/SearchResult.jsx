import "./SearchResult.scss";
import { NextButton, PreviousButton } from "../../Buttons/Buttons";
import { useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";
import GlobalContext from "../../../Context/GlobalContext";
import { apiActions } from "../../../Reducer/TriggerApiReducer";

const SearchResult = () => {
  const {searchResult,apiState,apiDispatch,setSearch}=useContext(GlobalContext)

  const handlePreviousData=()=>
  {
    apiState.searchEvent?.offSet>0&&apiDispatch({type:apiActions.SEARCH_EVENT,payload:{...apiState.searchEvent,offSet:apiState.searchEvent.offSet-7,}})
  }

  const handleNextData=()=>
  {
   apiDispatch({type:apiActions.SEARCH_EVENT,payload:{...apiState.searchEvent,offSet:apiState.searchEvent.offSet+7,}})
  }

  return (
    <div className="search-result">
      <div className="search-header">
        <div className="search-nav">
          <div className="go-back" onClick={() => setSearch(false)}>
            <FontAwesomeIcon icon={faArrowLeft} size={"1xl"}/>
          </div>
          <div className="head">Search Results</div>
        </div>
        <div className="search-buttons">
          <div onClick={handlePreviousData} className="search-previous-btn">
            <PreviousButton />
          </div>

          <div onClick={searchResult.isTruncated ? handleNextData : null}>
            <NextButton />
          </div>
        </div>
      </div>

      <div className="search-result-content">
        {searchResult.appointments.length == 0 ? (
          <div className="no-data-found">No Results Found</div>
        ) : (
          searchResult.appointments.map((event, index) => (
            <div key={index}>
              <AppointmentDetails event={event} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResult;
