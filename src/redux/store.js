import { createStore, applyMiddleware } from 'redux';
//import 'babel-polyfill';
import "regenerator-runtime/runtime"; //triba li??

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware();
    
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, logger)
    );

    sagaMiddleware.run(rootSaga);    

    return store;
}