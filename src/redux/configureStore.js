import {createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import  reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
   return createStore(
       rootReducer,
       initialState,
       composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
       );
}