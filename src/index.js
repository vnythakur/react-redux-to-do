import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';

const createStoreWithApplyMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
	<Provider store={createStoreWithApplyMiddleware(rootReducer)}>
		<App />
	</Provider>
	, document.getElementById('root'));
