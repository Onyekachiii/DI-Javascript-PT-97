const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS)
app.use(express.static('client'));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});
// Handle the POST request from the login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // In a real application, you should validate the credentials and authenticate the user here.
  // For simplicity, we'll just print the credentials for this example.
  console.log('Received username:', username);
  console.log('Received password:', password);

  // Redirect the user to a success or failure page
  // For simplicity, we'll always redirect to the success page.
  res.redirect('/error.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);