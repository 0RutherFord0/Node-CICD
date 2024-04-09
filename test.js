const http = require("http");

// Define the URL of your Express.js server
const url = "http://localhost:3000";

// Define the API endpoint paths
const endpoints = ["/api/name", "/api/age", "/api/password"];

// Function to make HTTP requests to the API endpoints
function testEndpoint(endpoint) {
  return new Promise((resolve, reject) => {
    http
      .get(url + endpoint, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          const result = JSON.parse(data);
          resolve(result);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Test each endpoint
endpoints.forEach((endpoint) => {
  testEndpoint(endpoint)
    .then((response) => {
      console.log(`${endpoint} - Response:`, response);
    })
    .catch((error) => {
      console.error(`${endpoint} - Error:`, error);
    });
});
