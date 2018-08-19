import { combineReducers } from 'redux';

import TaskReducers from './TaskReducers';

const rootReducer = combineReducers({
	tasks : TaskReducers
});

export default rootReducer;