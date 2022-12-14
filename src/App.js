import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginContainer from './components/units/login/login.container';
import SignUpContainer from './components/units/signUp/signUp.container';
import TodoContainer from './components/units/todos/todo.container';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginContainer />}></Route>
        <Route path='/signUp' element={<SignUpContainer />}></Route>
        <Route path='/todos' element={<TodoContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
