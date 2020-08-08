import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
          <img src="https://cdn.imgbin.com/9/19/11/imgbin-casual-diesel-clothing-fashion-logo-park-trail-WeDbU0uyNC3N50zBMDRukr0wu.jpg" alt="logo"/>
      </header>

      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <br/>
        <div><a href="#">Settings</a></div>
      </nav>

      <div className="content">
        Main Content
        </div>
    </div>
  );
}

export default App;
