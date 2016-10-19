import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import maxreducer from './reducer';

export const store = createStore(maxreducer);

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root')
);
