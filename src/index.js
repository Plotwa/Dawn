import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let messagesData = [
  { id: 1, message: 'OUU MY' },
  { id: 2, message: 'Hello Niggga' },
  { id: 3, message: 'Why are you gay?' },
]
let dialogsData = [
  { id: 1, name: 'Miha' },
  { id: 2, name: 'Serega+pepega' },
  { id: 3, name: 'Vano' },
] 
let postsData=[
  {post:'Hi, how are you?',id:1,likescount:12},
  {post:'Problem?',id:2,likescount:15}
]
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}   />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
