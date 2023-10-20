import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Importez configureStore depuis Redux Toolkit

import App from './components/app';
import flatsReducer from './reducers/flat_reducer'; // Importez votre rootReducer

import '../assets/stylesheets/application.scss';

const store = configureStore({
  flats: flatsReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
