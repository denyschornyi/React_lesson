import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Nav />

      <div className="content">
        <div>
          <img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/>  
        </div>

        <div>
          ava + description
        </div>

        <div>
          My posts
          <div>New posts</div>
        </div>

        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>

      </div>
    </div>
  );
}

export default App;
