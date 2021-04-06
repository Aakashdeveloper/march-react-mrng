import {combineReducers} from 'redux';
import films from './MovieReducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer