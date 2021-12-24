import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todos from './components/todo';
function App() {
  return (
     <div className="container">
          <h1>Mobile Operating System</h1>
          {["Android","Blackberry","iPhone","Windows Phone"].map(e=> <Todos  num={e} />)}
          <h1>Mobile Manufacturers</h1>
          {["Samsung","HTC","Micromax","Apple"].map(e=> <Todos  num={e} />)}
        </div>
      );
    }
export default App;
