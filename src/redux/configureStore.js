import {createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import  reduxImmutableStateInvariant from "redux-immutable-state-invariant"

export default function configureStore(initialState){
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
   return createStore(
       rootReducer,
       initialState,
       composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
       );
}