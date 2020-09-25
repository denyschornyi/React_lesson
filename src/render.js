import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

import {addPost} from './redux/state';
import {changeNewPostText} from './redux/state';

export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={props} addPost={addPost} changeNewPostText={changeNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
