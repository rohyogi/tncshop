import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userSlice';
import productReducer from './reducers/productSlice';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  },
  middleware: [thunk, logger]
})