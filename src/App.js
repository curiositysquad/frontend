import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [todosState, setTodosState] = useState({ todos: [] });
  useEffect(() => {
    getTodos()
  }, [])

  function handleAdd(event, formInputs) {
    event.preventDefault()
    fetch('/todos', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdTodo => createdTodo.json())
      .then(jsonedTodo => {
        setTodosState(prevState =>
          ({ todos: [jsonedTodo, ...prevState.todos] }))
      })
      .catch(error => console.log(error))
  }

  function getTodos() {
    fetch('/todos')
      .then(res => res.json())
      .then(data => setTodosState({ todos: data }))
      .catch(error => console.error(error));
  }

  function handleDelete(deletedTodo) {
    fetch(`/todos/${deletedTodo.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        getTodos();
      })
      .catch(error => console.log(error));
  }


  function handleUpdate(event, formInputs) {
    event.preventDefault()
    fetch(`/todos/${formInputs.id}`, {
      method: 'PUT',
      body: JSON.stringify(formInputs),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'Application/json'
      }
    })
      .then(() => {
        getTodos()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Aside handleSubmit={handleAdd} />
        <Main
          todos={todosState.todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
