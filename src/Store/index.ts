import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as authentication } from '../Components/authentication'


const rootReducer = combineReducers({
    authentication,
});


export default createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);