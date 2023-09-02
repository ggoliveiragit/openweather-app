import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather';
import './App.css';
import Moment from 'react-moment';


function App() {

  return (
    
    <div className="App">
      
      <Moment local interval={1}>
                
      </Moment>
      <Weather />
    </div>
  );
}

export default App;