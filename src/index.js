import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'hi', Like: 15},
    {id: 2, message: 'Hi,friend how are you?', Like: 55},
    {id: 2, message: 'The United States of America ?', Like: 555},
    {id: 2, message: 'England is a country that is part of the United Kingdom?', Like: 555},
]
let messages = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'qq'},
    {id: 4, message: 'Wtf?'},
    {id: 5, message: 'good'},
    {id: 6, message: 'world'},
]

let dialogs = [
    {id: 1, name: 'Evgeny'},
    {id: 2, name: 'Katerina'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Anastasia'},
    {id: 6, name: 'Vlad'},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} messages={messages} dialogs={dialogs}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
