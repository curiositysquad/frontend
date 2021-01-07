import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [todosState, setTodoListState] = useState({ notices: [] });
  return (
    <div className="App">

      <div className='container'>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;

