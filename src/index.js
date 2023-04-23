import store  from './redux/redux_store';
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
        <App dispatch={store.dispatch.bind(store)}
        store={store}
        />
        </BrowserRouter>
      </React.StrictMode>
    
  );
};
 store.subscribe(()=>{
  let state=store.getState();
  rerenderEntireTree(state)  
 })
rerenderEntireTree(store.getState());
