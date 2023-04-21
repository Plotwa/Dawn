import store  from './redux/state';
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
        <App appState={state} addPost={store.addPost.bind(store)}
        updateNewText={store.updateNewText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessage={store.updateNewMessage.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>
    
  );
};
 store.subscribe(rerenderEntireTree)
rerenderEntireTree(store.getState());
