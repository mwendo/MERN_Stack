import React from 'react';
import './App.css';

import Personcard from "./components/mynewcomponent";

function App() {
  return (
    <div className="App">
      <Personcard lastName = {"Doe"} firstName = {"Jane"} age = {45} hairColor = {"Black"}/>
      <Personcard lastName = {"Smith"} firstName = {"John"} age = {88} hairColor = {"Brown"}/>
      <Personcard lastName = {"Fillmore"} firstName = {"Millard"} age = {50} hairColor = {"Brown"}/>
      <Personcard lastName = {"Smith"} firstName = {"Maria"} age = {62} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;