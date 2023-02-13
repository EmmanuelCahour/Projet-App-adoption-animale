import { combineReducers } from 'redux';

import userReducer from './user';
import animalsReducer from './animals';
import profileReducer from './profil';

const rootReducer = combineReducers({
  user: userReducer,
  animals: animalsReducer,
  profil: profileReducer,
});

export default rootReducer;
