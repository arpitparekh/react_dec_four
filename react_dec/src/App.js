import React, { useState } from 'react';
import './App.css';
import FormComp from './components/FormComp';
import ListComp from './components/ListComp';

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

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
  const [status, setStatus] = useState('Add');

  let ind = 0

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  function addTodo() {
    if (status === 'Add') {
      setList([...list, todo]);
      setTodo('');
    } else {
      // update
      list[ind] = todo;
      setStatus('Add');
      setTodo('');
    }
  }

  function writeTodo(e) {
    setTodo(e.target.value);

  }

  function  removeClick(index) {
    // list.splice(index, 1);
    // setList([...list]);
    setList(
      list.filter((item, a) => {
        if (a !== index) {
          return item;
        }
      })
    );
  }
  function editClick(index) {
    ind = index;
    setTodo(list[index]);
    setStatus('Update');
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

      <TodoForm addTodo={addTodo} writeTodo={writeTodo} todo={todo} status={status}/>
      <TodoList list={list} removeClick={removeClick} editClick={editClick} />
    </div>
  );
}
