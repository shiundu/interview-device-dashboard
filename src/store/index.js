// @flow

import React from 'react';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

middlewares.push(promise);

const initialState = {
    devicesReducer: {},
}

const configureStore = () => {
    const store = createStore(
      rootReducer,
      initialState,
        applyMiddleware(
            ...middlewares 
        )
    );
  
    return store;
}

export default configureStore();
