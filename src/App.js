import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Pfofile';

const App = () => {
  return ( 
    <div className='app-wrapper'>
        <Header />
         <NavBar/>
        <Profile/>         
    </div>
  );
}

export default App;

