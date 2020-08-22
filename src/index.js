import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let postData = [
  {id: 1, postMessage: 'How you doing?', like: 3},
  {id: 2, postMessage: 'I ll be a PRO in React', like: 900}
];

ReactDOM.render(

  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
