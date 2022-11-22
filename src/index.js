import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1 - Importamos createStore
// 2 - importamos el rootReducer que combina todos nuestros reducers ( == a piezas de state)
// 3 - importamos Provider
// 4 - Definimos el store y se lo pasamos a Provider
// 5 - Y si queremos utilizar las dev tools extension de redux le pasamos:
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
