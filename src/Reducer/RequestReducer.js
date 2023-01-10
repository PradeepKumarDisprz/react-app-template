export const requestInitialState = {
    showRequestSuccess: false,
    errorResponse:null,
};

export const requestActions = {

    OPEN_REQUEST_SUCCESS: "OPEN_REQUEST_SUCCESS",
    CLOSE_REQUEST_SUCCESS: "CLOSE_REQUEST_SUCCESS",
    SET_ERROR_RESPONSE: "SET_ERROR_RESPONSE",
    REMOVE_ERROR_RESPONSE: "REMOVE_ERROR_RESPONSE"
};

export const requestReducer = (state =  requestInitialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case requestActions.OPEN_REQUEST_SUCCESS:
            return { showRequestSuccess: true };
        case requestActions.CLOSE_REQUEST_SUCCESS:
            return { showRequestSuccess: false };

        case requestActions.SET_ERROR_RESPONSE:
            return { errorResponse: action.value };
        case requestActions.REMOVE_ERROR_RESPONSE:
            return { errorResponse: null };

        default:
            throw new Error(`the action ${action.type} not found`)

    }
};

