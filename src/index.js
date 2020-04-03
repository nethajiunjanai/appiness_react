import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styleSheets/index.scss';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './store/reducer/rootReducer';
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons', 'Open Sans'] } });
const store=createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
