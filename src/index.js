import store  from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render( 
    <React.StrictMode>
    <BrowserRouter>
        <App appState={state} dispatch={store.dispatch.bind(store)}
        />
        </BrowserRouter>
      </React.StrictMode>
    
  );
};
 store.subscribe(rerenderEntireTree)
rerenderEntireTree(store.getState());
