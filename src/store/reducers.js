import C from '../constants'
import { combineReducers } from 'redux'

export const results = (state=[], action) => {
    switch(action.type) {
    case C.GET_ALL_RESULTS:
        return action.payload;
    default:
        return state;
    }
};

export const movieDetails = (state={}, action) => {
    switch(action.type) {
        case C.GET_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    results,
    movieDetails,
});
