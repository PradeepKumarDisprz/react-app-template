export const initialState = {
    showModal: false,
    isLoading: false,
    viewEvent: null,
    updateEvent: null,
    showRequestSuccess: false,
    errorResponse:null,
};

export const actions = {
    OPEN_REQUEST_SUCCESS: "OPEN_REQUEST_SUCCESS",
    CLOSE_REQUEST_SUCCESS: "CLOSE_REQUEST_SUCCESS",

    SET_ERROR_RESPONSE: "SET_ERROR_RESPONSE",
    REMOVE_ERROR_RESPONSE: "REMOVE_ERROR_RESPONSE",

    OPEN_ADD_EVENT: "OPEN_ADD_EVENT",
    CLOSE_ADD_EVENT: "CLOSE_ADD_EVENT",

    OPEN_UPDATE_EVENT: "OPEN_UPDATE_EVENT",
    CLOSE_UPDATE_EVENT: "CLOSE_UPDATE_EVENT",

    SET_VIEW_EVENT: "SET_VIEW_EVENT",
    RESET_VIEW_EVENT: "RESET_VIEW_EVENT",

    OPEN_REQUEST_LOADER: "OPEN_REQUEST_LOADER",
    CLOSE_REQUEST_LOADER: "CLOSE_REQUEST_LOADER",

    SET_MONTH_VIEW_EVENT: "SET_MONTH_VIEW_EVENT",
    RESET_MONTH_VIEW_EVENT: "RESET_MONTH_VIEW_EVENT",

};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_ADD_EVENT:
            return { ...state, showModal: true };
        case actions.CLOSE_ADD_EVENT:
            return { ...state, showModal: false };

        case actions.OPEN_REQUEST_SUCCESS:
            return { ...state, showRequestSuccess: true };
        case actions.CLOSE_REQUEST_SUCCESS:
            return { ...state, showRequestSuccess: false };

        case actions.SET_ERROR_RESPONSE:
            return {...state, errorResponse: action.value };
        case actions.REMOVE_ERROR_RESPONSE:
            return {...state, errorResponse: null };

        case actions.OPEN_UPDATE_EVENT:
            console.log(action.payload)
            return { ...state, updateEvent: action.payload };
        case actions.CLOSE_UPDATE_EVENT:
            return { ...state, updateEvent: null };

        case actions.SET_VIEW_EVENT:
            return { ...state, viewEvent: action.payload };
        case actions.RESET_VIEW_EVENT:
            return { ...state, viewEvent: null };

        case actions.OPEN_REQUEST_LOADER:
            return { ...state, isLoading: true };
        case actions.CLOSE_REQUEST_LOADER:
            return { ...state, isLoading: false };

        default:
            throw new Error(`the action ${action.type} not found`)
    }
};

