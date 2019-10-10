import React from "react";
import ReactDOM from "react-dom";

import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'

const initialState = sampleData;
const store = storeFactory(initialState);

window.React = React;
window.store = store;

ReactDOM.render(
	<Provider store={store}>
	   {routes}
	</Provider>,
  document.getElementById('root')
);
