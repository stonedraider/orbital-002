import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import SwitchThemeReducer from './reducers/switch-theme-reducer.js';

const store = configureStore();

if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  module.hot.accept('./reducers/'), () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  }
  // module.hot.accept();
}

// if(module.hot) {
// 	module.hot.accept("./components/App", () => {
// 		const NextApp = require('./components/App').default;
// 		ReactDOM.render(<NextApp />, document.getElementById('a'));
// 	});
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
