import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Booking from './Booking';
import './styles.js';
export default () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
};
