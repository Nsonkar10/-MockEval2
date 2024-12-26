
const formData = new URLSearchParams();
formData.append("key1", "value1");
formData.append("key2", "value2");
headers: {
    'X-Custom-Header': 'CustomValue',
  }

body: formData.toString();fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));


  fetch("http://localhost:3000/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
  
  fetch("http://localhost:3000/posts?author=typicode")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
