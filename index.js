/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import PostMethod from './PostMethod';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './Redux/store';
import Navigation from './Navigation';
import App from './App';
// import App from './Confirmatation';



const ReduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
// AppRegistry.registerComponent(appName, () => App);
