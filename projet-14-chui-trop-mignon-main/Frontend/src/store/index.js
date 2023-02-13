import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import userMiddleware from 'src/middlewares/userMiddleware';
import animalsMiddleware from 'src/middlewares/animalsMiddleware';
import profilMiddleware from 'src/middlewares/profilMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
    animalsMiddleware,
    profilMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
