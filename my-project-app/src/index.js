import React from "react";
import store from "./redux/redux-store";

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           store={store}
           dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();