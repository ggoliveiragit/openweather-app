// weather-app/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000; // or any port of your choice

app.use(express.json());

// Define a route to fetch weather data from OpenWeather API
app.get('/api/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apiKey = 'c51dedb5d6ca59dd6b5fc6be1e14316f';
    //const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${apiKey}`;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+req.params.city+'&appid='+apiKey+'&units=metric';
    
    
    
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
