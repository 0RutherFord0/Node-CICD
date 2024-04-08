const express = require("express");
const app = express();
const generatePassword = require("generate-password");
const PORT = process.env.PORT || 3000;

// Define a route for the API
app.get("/api/name", (req, res) => {
  // Replace 'Your Name' with your actual name
  const name = "Hello World!";
  // Sending the name in JSON format
  res.json({ name });
});

// Define a route for the API
app.get("/api/age", (req, res) => {
  // Replace 'Your Name' with your actual name
  const age = "28";
  // Sending the name in JSON format
  res.json({ age });
});

// Define a route to generate a random password
app.get("/api/password", (req, res) => {
  // Generate a random password
  const password = generatePassword.generate({
    length: 12, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    excludeSimilarCharacters: true, // Exclude similar characters like 'i' and 'l'
  });

  // Sending the password in JSON format
  res.json({ password });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
