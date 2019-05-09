import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/combined-reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import App from './App';
import { SnackbarProvider } from 'notistack';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <App />
        </Provider>
    </SnackbarProvider>,
	document.getElementById('root')
);
