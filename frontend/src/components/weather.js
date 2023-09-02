// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';



const cities = ['Lisbon', 'Leiria', 'Coimbra', 'Porto', 'Faro',];

function Weather() {
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const weatherDataPromises = cities.map(async (city) => {
        const response = await axios.get(
          `http://localhost:5000/api/weather/${city}`
        );
        return response.data;
      });

      const weatherDataArray = await Promise.all(weatherDataPromises);
      setWeatherData(weatherDataArray);
    }

    fetchData();
  }, []);



  return (

    <Container bg="dark">

      <h1 className="mt-5">Weather App</h1>
      <Row className="mt-3">
        {weatherData !== null ? (

          weatherData.map((data, index) => (

            <Col sm key={index} md={4} className="mb-3">
              <Card className="weatherCard" >
                <Card.Body>



                  <h2>{data.name}, {data.sys.country}</h2>
                  <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}></img>
                  <h4>{data.weather[0].description}</h4>
                  <Row>
                    <Col style={{display:'flex', justifyContent:'right'}}>
                      <div className='max'>{data.main.temp_max}°C</div>
                    </Col>
                    <Col style={{display:'flex', justifyContent:'left'}}>
                      <div className='min'>{data.main.temp_min}°C</div>
                    </Col>
                  </Row>

                  <p>Humidity: {data.main.humidity}%</p>
                  

                  

                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </Row>
    </Container>
  );
}

export default Weather;