// TODO: Starter for Level 06: API GET practice.

// Students should replace the URL below with their chosen API endpoint.
// TODO: fetch('https://api.example.com/endpoint')

fetch("https://zenquotes.io/api/quotes/endpoint");

console.log(
  "I learned that it's important to use the correct URL for the API endpoint, and that I can use Postman to test my API calls before writing code. I also learned that APIs can return data in different formats.",
);

const api_url = "https://zenquotes.io/api/quotes/";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);
