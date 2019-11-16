import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const { userType } = useSelector(state => state.authentication);

  let dashboard = null;

  if (userType === 'admin') {
    dashboard = AdminDashboard;
  } else { 
    dashboard = LoginForm;
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/navbar' component={Navbar} /> {/* testing pages */}
      <PrivateRoute path='/dashboard' component={dashboard} />
      {/* <Route path='/admin' component={AdminDashboard} /> testing pages */}
    </div>
  );
}

export default App;