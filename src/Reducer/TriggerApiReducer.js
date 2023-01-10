
export const apiInitialState = {
    postEvent: null,
    deleteEvent: null,
    updateEvent: null
};

export const apiActions = {
    POST_EVENT: "POST_EVENT",
    RESET_POST_EVENT: "RESET_POST_EVENT",
    DELETE_EVENT: "DELETE",
    RESET_DELETE_EVENT: "RESET_DELETE_EVENT",
    UPDATE_EVENT: "UPDATE_EVENT",
    RESET_UPDATE_EVENT: "RESET_UPDATE_EVENT"
};

export const TriggerApiReducer = (state = apiInitialState, action) => {
    console.log(action.type);
    switch (action.type) {

        case apiActions.POST_EVENT:
            return { postEvent: action.payload };
        case apiActions.RESET_POST_EVENT:
            return { postEvent: null };

        case apiActions.DELETE_EVENT:
            return { deleteEvent: action.payload };
        case apiActions.RESET_DELETE_EVENT:
            return { deleteEvent: null };

        case apiActions.UPDATE_EVENT:
            return { updateEvent: action.payload };
        case apiActions.RESET_UPDATE_EVENT:
            return { updateEvent: null };
            
        default:
            return state;
    }
};

