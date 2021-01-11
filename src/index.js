import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMiddleware } from './redux/middleware';
import App from './App';
import './index.css';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware,
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
