import { createStore, combineReducers } from 'redux';

import incrValues from './reducers/incr-reducers';
import decrValue from './reducers/decr-value';

const finalReducer = combineReducers({
	incrValues,
  decrValue
});

export default createStore(finalReducer);
