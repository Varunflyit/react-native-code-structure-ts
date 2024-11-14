import {combineReducers} from 'redux';
import {userReducer} from './user';
import {globalReducer} from './global';
const rootReducer = combineReducers({
  userReducer,
  globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
