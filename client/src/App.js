import React from 'react';
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AdminDashboard from './components/AdminDashboard';
import VolunteerDashboard from './components/VolunteerDashboard';
import StudentDashboard from './components/StudentDashboard';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const type = useSelector(state => state.authentication.user.type);

  let dashboard;

  switch(type) {
    case 'admin':
      dashboard = AdminDashboard; 
      break;

    case 'volunteer':
      dashboard = VolunteerDashboard;
      break;

    case 'student':
      dashboard = StudentDashboard;
      break;
  }

  console.log()

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      {dashboard ? <PrivateRoute path='/dashboard' component={dashboard} /> : null}
    </div>
  );
}

export default App;