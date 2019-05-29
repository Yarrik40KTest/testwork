import {combineReducers} from  'redux';
import TestReducers from './Reducers'


const allReducers= combineReducers({
    TestReducer:TestReducers,
    active:TestReducers
});
export default allReducers;