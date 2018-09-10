import Reducers from './reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer=combineReducers({
    posts:Reducers,
    form: formReducer
});

export default rootReducer;