import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Incr from './components/incr';
import Decr from './components/dncr';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Incr key={"1"} storeKey={"1"}/>
      <Incr key={"2"} storeKey={"2"}/>
      <Decr/>
    </div>
  </Provider>
  , document.getElementById('app'));
