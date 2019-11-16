import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
    </div>
  );
}

export default App;