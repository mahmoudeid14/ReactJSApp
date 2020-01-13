import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car, { myFunction1 } from './Car';

function App() {
  const color = "black";
  return (
    <div className="App">
      <h1>
        Hello Mahmoud Eid. 1
      </h1>
      <Car color={color} />
      {/* <Car color="red" /> */}
      {myFunction1()}
    </div>
  );
}

export default App;
