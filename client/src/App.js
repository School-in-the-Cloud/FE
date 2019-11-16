import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/navbar' component={Navbar} /> {/* testing pages */}
      <Route path='/admin' component={AdminDashboard} /> {/* testing pages */}
    </div>
  );
}

export default App;