import './App.css';
import React, { useState} from "react";
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [ formInputs, setFormInputs ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  
  return (
    <div className="App">
      <Form inputs={formInputs} setInputs={setFormInputs} />
      <Results state={formInputs} />
    </div>
  );
}

export default App;
