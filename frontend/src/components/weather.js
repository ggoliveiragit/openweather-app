// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

const cities = ['Lisbon', 'Leiria', 'Coimbra', 'Porto', 'Faro'];

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
                <Col key={index} md={4} className="mb-3">
                  <Card border="success" bg="dark" text="light" style={{ width: '18rem' }}>
                    <Card.Body>
                      <h2>{data.name}, {data.sys.country}</h2>
                      <p>Max : {data.main.temp_max}°C</p>
                      <p>Min : {data.main.temp_min}°C</p>
                      <p>Humidity: {data.main.humidity}%</p>
                      <p>Weather: {data.weather[0].description}</p>

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