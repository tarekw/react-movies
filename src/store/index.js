import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

    let result;

    console.groupCollapsed(`dispatching action => ${action.type}`);
    result = next(action);

    let { results } = store.getState();

    console.log('-------------', results);
    console.log(`
        movie results: ${results}
    `);

    console.groupEnd();

    return result
};

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}
