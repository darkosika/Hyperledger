import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
const StoreInstance=Store();
ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>,

document.getElementById('root')
);
registerServiceWorker();
