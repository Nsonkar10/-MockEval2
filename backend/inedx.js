{
    "users": [
      { "id": 1, "name": "Alice", "email": "alice@example.com" },
      { "id": 2, "name": "Bob", "email": "bob@example.com" }
    ]
}
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Converts response data to JSON
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
  const options = {
    method: "POST", // HTTP method (GET, POST, etc.)
    headers: {
      "Content-Type": "application/json", // Data type
    },
    body: JSON.stringify({ title: "json-server", author: "typicode" }), // Request payload
  };  
  const options = {
    method: "POST", // HTTP request method
    headers: {
      // Metadata about the request
      "Content-Type": "application/json", // Data format being sent
      Authorization: "Bearer <token>", // Example of an authorization token
    },
    body: JSON.stringify({ title: "JSON Server", author: "Typicode" }), // Payload
  };
  headers: {
    'Content-Type': 'application/json',
  }
     