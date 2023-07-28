import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDsL20adfD3HXchxpj__6qT4pWuC0yVlI4",
  authDomain: "info442-biobuddies.firebaseapp.com",
  projectId: "info442-biobuddies",
  storageBucket: "info442-biobuddies.appspot.com",
  messagingSenderId: "151659787237",
  appId: "1:151659787237:web:b809ed533289359dbcb50c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
