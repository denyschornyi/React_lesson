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

const App = () => {

  let dialogData = [
    {id: 1, name: 'Denys'},
    {id: 2, name: 'Daria'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Artemus'},
    {id: 5, name: 'Vova'},
    {id: 6, name: 'Alex'},
];


let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Are you already a PRO in React?'}
];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* <Route exaxt path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/> */}
          <Route exaxt path='/dialogs' render={() => <Dialogs dialogData={dialogData} messageData={messageData}/>}/>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
