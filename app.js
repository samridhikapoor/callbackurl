const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world! This is your Express.js app running on Heroku.');
});

// Route for the callback URL
app.post('/transcription_callback', (req, res) => {
  // Assuming Assembly AI sends transcription results in the request body
  const transcriptionResults = req.body;

  // Handle the transcription results as per your requirements
  console.log('Transcription results:', transcriptionResults);

  // Send a response to confirm receipt of the callback
  res.status(200).send('Transcription results received successfully.');
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});