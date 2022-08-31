import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePostNewText} from "./Redux/State";


const root = ReactDOM.createRoot(document.getElementById('root'))

export  let  rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostNewText={updatePostNewText}/>
      </BrowserRouter>
    </React.StrictMode>);
}

