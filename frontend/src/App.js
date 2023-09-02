import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import './App.css';
import Moment from 'react-moment';
import LoginForm from './components/LoginForm';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
    <div className="App">
      {isLoggedIn ? (
        <>
          <Moment local interval={1}></Moment>
          <button className="logoutButton" onClick={handleLogout}>Logout</button>
          <Weather />
          
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}



      
    </div>
  );
}

export default App;