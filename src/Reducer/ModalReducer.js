
export const initialState = {
    showModal: false,
    showRequestSuccess: false,
    errorResponse: "",
    isLoading: false,
    updateEvent: null
};

export const actions = {
    OPEN_ADD_EVENT: "OPEN_ADD_EVENT",
    CLOSE_ADD_EVENT: "CLOSE_ADD_EVENT",
    OPEN_UPDATE_EVENT: "OPEN_UPDATE_EVENT",
    CLOSE_UPDATE_EVENT: "CLOSE_UPDATE_EVENT",
    OPEN_REQUEST_SUCCESS: "OPEN_REQUEST_SUCCESS",
    CLOSE_REQUEST_SUCCESS: "CLOSE_REQUEST_SUCCESS",
    OPEN_REQUEST_LOADER: "OPEN_REQUEST_LOADER",
    CLOSE_REQUEST_LOADER: "CLOSE_REQUEST_LOADER",
    SET_ERROR_RESPONSE: "SET_ERROR_RESPONSE",
    REMOVE_ERROR_RESPONSE: "REMOVE_ERROR_RESPONSE"
};

export const modalReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actions.OPEN_ADD_EVENT:
            return { showModal: true };
        case actions.CLOSE_ADD_EVENT:
            return { showModal: false };

        case actions.OPEN_UPDATE_EVENT:
            return { updateEvent:action.payload };
        case actions.CLOSE_UPDATE_EVENT:
            return { updateEvent:null};

        case actions.OPEN_REQUEST_LOADER:
            return { isLoading: true };
        case actions.CLOSE_REQUEST_LOADER:
            return { isLoading: false };

        case actions.OPEN_REQUEST_SUCCESS:
            return { showRequestSuccess: true };
        case actions.CLOSE_REQUEST_SUCCESS:
            return { showRequestSuccess: false };

        case actions.SET_ERROR_RESPONSE:
            console.log(action.value)
            return { errorResponse: action.value };
        case actions.REMOVE_ERROR_RESPONSE:
            return { errorResponse: "" };
        default:
            return state;
    }
};

