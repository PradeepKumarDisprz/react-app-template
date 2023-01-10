// export const initialState = {
//     showModal: false,
//     updateEvent: null
// };

// export const actions = {
//     OPEN_ADD_EVENT: "OPEN_ADD_EVENT",
//     CLOSE_ADD_EVENT: "CLOSE_ADD_EVENT",
//     OPEN_UPDATE_EVENT: "OPEN_UPDATE_EVENT",
//     CLOSE_UPDATE_EVENT: "CLOSE_UPDATE_EVENT",

// };

// export const modalReducer = (state = initialState, action) => {
//     console.log(action.type);
//     switch (action.type) {
//         case actions.OPEN_ADD_EVENT:
//             return { showModal: true };
//         case actions.CLOSE_ADD_EVENT:
//             return { showModal: false };
//         case actions.OPEN_UPDATE_EVENT:
//             return { updateEvent: action.payload };
//         case actions.CLOSE_UPDATE_EVENT:
//             return { updateEvent: null };
//         default:
//             throw new Error(`the action ${action.type} not found`)
//     }
// };










export const initialState = {
    showModal: false,
    isLoading: false,
    updateEvent: null
};

export const actions = {
    OPEN_ADD_EVENT: "OPEN_ADD_EVENT",
    CLOSE_ADD_EVENT: "CLOSE_ADD_EVENT",
    OPEN_UPDATE_EVENT: "OPEN_UPDATE_EVENT",
    CLOSE_UPDATE_EVENT: "CLOSE_UPDATE_EVENT",
    OPEN_REQUEST_LOADER: "OPEN_REQUEST_LOADER",
    CLOSE_REQUEST_LOADER: "CLOSE_REQUEST_LOADER",
};

export const modalReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actions.OPEN_ADD_EVENT:
            return { showModal: true };
        case actions.CLOSE_ADD_EVENT:
            return { showModal: false };

        case actions.OPEN_UPDATE_EVENT:
            return { updateEvent: action.payload };
        case actions.CLOSE_UPDATE_EVENT:
            return { updateEvent: null };

        case actions.OPEN_REQUEST_LOADER:
            return { isLoading: true };
        case actions.CLOSE_REQUEST_LOADER:
            return { isLoading: false };
       
            default:
            throw new Error(`the action ${action.type} not found`)
    }
};

