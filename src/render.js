import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addPost, updateNewMessage, updateNewText } from './redux/state';

export let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render( 
    <React.StrictMode>
    <BrowserRouter>
        <App appState={state} addPost={addPost}
        updateNewText={updateNewText}
        addMessage={addMessage}
        updateNewMessage={updateNewMessage}/>
        </BrowserRouter>
      </React.StrictMode>
    
  );
};
