import {createStore} from 'redux'
import combineReducers from './Reducers'
const compose = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const initialState={};
const store = createStore(combineReducers,initialState,compose);
export default store