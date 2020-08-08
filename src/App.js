import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Title />
      <Header />
    </div>
  );
}

const Title = () => {
  return (
    <h1>Denys gonna be a profesional in React</h1>
  )
} 

const Header = () => {
  return (
    <ul>
      <li>Main</li>
      <li>Content</li>
      <li>Contact</li>
    </ul>
  )
}
export default App;
