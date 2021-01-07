import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [TodoListState, setTodoListState] = useState({ todos: [] });

  useEffect(() => {
    getTodoList;
  }, []);

  function handleAdd(event, formInputs) {
    event.preventDefault();
    console.log(formInputs);
  }
  //... and pass this into the Aside

  <Aside handleSubmit={handleAdd} />
}


function getTodoList() {
  fetch('/TodoItems')
    .then(response => response.json())
    .then(json => setTodoState({ todos: json }))
    .catch(error => console.error(error));
}

export default App;