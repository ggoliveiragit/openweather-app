// weather-app/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//In production use databases
// Use express-session to manage sessions
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

//user data
const users = [
  { id: 1, username: 'user1', password: 'user1' },
  { id: 2, username: 'user2', password: 'user2' },
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.json({ message: 'Login successful', user });
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    return res.json({ message: 'Logout successful' });
  });
});

// Route to fetch weather data from OpenWeather API
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
