const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const TASK_SELECTED = "TASK_SELECTED";
const TASK_ADD = "TASK_ADD";
const ACTIONS = "ACTIONS";


const initialState = {
    fetching: false,
    error: null,
    test: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case TASK_SELECTED:
            return {
                ...state,
                test: action.payload
            };
        case TASK_ADD:
            return {
                ...state,
                test: [...state.test, action.payload.task]
            };
        case ACTIONS:
            return {
                ...state,
                isAdmin: action.payload
    }
case
    API_CALL_REQUEST:
        return {...state, fetching: true, error: null};
case
    API_CALL_SUCCESS:
        return {...state, fetching: false, dog: action.dog};
case
    API_CALL_FAILURE:
        return {...state, fetching: false, dog: null, error: action.error};
default:
    return state;
}
}



