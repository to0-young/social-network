import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>

                        <Route path='/profile/*' element={<Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}/>}/>

                        <Route path='/music/*' element={<Music otherProp={props} />}/>
                        <Route path='/news/*' element={<News otherProp={props} />}/>
                        <Route path='/settings/*' element={<Settings otherProp={props}/>} />
                        <Route path='/friends/*' element={<Friends otherProp={props}/>} />
                    </Routes>
                </div>
            </div>
    )
}
export default App;

