const express = require("express");
const app = express();
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
