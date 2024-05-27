const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a connection pool for MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1Republic.',
  database: 'your_database',
  connectionLimit: 10,
});

// Serve the static files in the public directory
app.use(express.static('public'));

// Handle the GET request for the meal plan
app.get('/meal-plan', (req, res) => {
  // Query the MySQL database for the meal plan data
  pool.query('SELECT * FROM meal_plan', (error, results, fields) => {
    if (error) {
      return res.status(500).send({ error: 'Internal Server Error' });
    }

    // Send the meal plan data as a JSON response
    res.send(results);
  });
});

// Handle the POST request for adding a new meal to the meal plan
app.post('/meal-plan', (req, res) => {
  // Get the meal data from the request body
  const meal = req.body;

  // Insert the meal data into the MySQL database
  pool.query('INSERT INTO meal_plan SET?', meal, (error, results, fields) => {
    if (error) {
      return res.status(500).send({ error: 'Internal Server Error' });
    }

    // Send a success response
    res.send({ message: 'Meal added successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});