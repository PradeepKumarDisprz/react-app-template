
export const apiInitialState = {
    postEvent: null,
    deleteEvent: null,
    updateEvent: null,
    searchEvent:null,
};

export const apiActions = {
    POST_EVENT: "POST_EVENT",
    RESET_POST_EVENT: "RESET_POST_EVENT",
    DELETE_EVENT: "DELETE",
    RESET_DELETE_EVENT: "RESET_DELETE_EVENT",
    UPDATE_EVENT: "UPDATE_EVENT",
    RESET_UPDATE_EVENT: "RESET_UPDATE_EVENT",
    SEARCH_EVENT:"SEARCH_EVENT",
    RESET_SEARCH_EVENT:"RESET_SEARCH_EVENT"
};

export const TriggerApiReducer = (state = apiInitialState, action) => {
    console.log(action.type);
    switch (action.type) {

        case apiActions.POST_EVENT:
            return { ...state,postEvent: action.payload };
        case apiActions.RESET_POST_EVENT:
            return {...state, postEvent: null };

        case apiActions.DELETE_EVENT:
            return { ...state,deleteEvent: action.payload };
        case apiActions.RESET_DELETE_EVENT:
            return { ...state,deleteEvent: null };

        case apiActions.UPDATE_EVENT:
            return {...state, updateEvent: action.payload };
        case apiActions.RESET_UPDATE_EVENT:
            return {...state, updateEvent: null };

        case apiActions.SEARCH_EVENT:
            return {...state,searchEvent:action.payload};
        case apiActions.RESET_SEARCH_EVENT:
            return {...state,searchEvent:null};
            
        default:
            return state;
    }
};

