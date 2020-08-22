import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route exaxt path='/dialogs' render={() => <Dialogs dialogData={props.dialogData} messageData={props.messageData}/>}/>
          <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
