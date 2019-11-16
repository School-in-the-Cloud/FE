import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;