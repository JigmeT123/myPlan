import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './Components/store/reducers/rootReducer';
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore';
import { getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import fbconfig from './config/fbconfig'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reactReduxFirebase(fbconfig,{useFirestoreForProfile: true,userProfile:"users",attachAuthIsReady: true}),
  reduxFirestore(fbconfig),

));

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <React.StrictMode>
     <Provider store={store}>
       <App />
       </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
  );
}).catch((err)=>{
  console.log('error in loading the firebase');
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
