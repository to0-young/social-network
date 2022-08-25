import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Redux/State";

// addPost('hello Urkaine');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);

