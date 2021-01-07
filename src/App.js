import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import './App.css';


function App() {
  const [todosState, setTodoListState] = useState({ todos: [] });

  useEffect(() => {
    getTodoList();
  }, []);

  function getTodoList() {
    fetch('/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));
  }


  return (
    <div className="App">

      <div className='container'>
        <Header />
        <Form />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
