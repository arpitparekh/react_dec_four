import React, { useState } from 'react';
import './App.css';
import FormComp from './components/FormComp';
import ListComp from './components/ListComp';

// 2 types of components
// 1. functional component
// 2. class component

/*

The `App` component is the main entry point of the React application. It manages the state of the form inputs (name, email, and password) and the result of the form submission. The component renders a `ListComp` component to display a list of items, and a `FormComp` component to handle the form submission. The `clickKaro` function is called when the form is submitted, and it updates the `result` state variable with the values of the form inputs.

*/


export default function App() {
  // state variables
  // use state hook is used to create state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');


  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div id="myDiv">
      <h1>Hello World</h1>
      <h2>This is my first React App</h2>
      <ListComp items={['apple', 'banana', 'orange', 'mango', 'grapes']} />

      <FormComp
        clickKaro={() => {
          setResult(`Name: ${name} Email: ${email} Password: ${password}`);
          setName('');
          setEmail('');
          setPassword('');
        }}
        nameChange={nameChange}
        emailChange={emailChange}
        passwordChange={passwordChange}
        uEmail={email}
        uName={name}
        uPassword={password}
      />

      <h1> {result} </h1>

    </div>
  );
}
