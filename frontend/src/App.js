import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import './App.css';
import Moment from 'react-moment';
import LoginForm from './components/LoginForm';
import { Button, Row, Col } from 'react-bootstrap';



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
          <br></br>
          <Row >
            <Col sm={10}></Col>
            <Col sm={2}><Button className="logoutButton" variant="outline-danger" onClick={handleLogout}>Logout</Button></Col>
            
            </Row>
            <h1>My Weather App</h1>
          <Row >
            <Moment local interval={1}></Moment>      
          </Row>
          <Weather/>
          
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}



      
    </div>
  );
}

export default App;