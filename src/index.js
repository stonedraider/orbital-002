import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import SwitchThemeReducer from './reducers/switch-theme-reducer.js';

const store = configureStore();

if (module.hot) {
  module.hot.accept(
      './reducers',
      () => store.replaceReducer(SwitchThemeReducer)
    );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
