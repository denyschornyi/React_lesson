import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';

export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={props} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
