import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose  } from 'redux';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promise)
  ));

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

document.getElementById('root')
);
registerServiceWorker();
