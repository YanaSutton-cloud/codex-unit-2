// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("demo-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = form.elements.message.value;
  // TODO: build data object, POST it, parse response, and display three response values

const queryString = new URLSearchParams(data);
const response = await fetch("https:" + "?" + queryString,);
const result = await response.json(); 
const questions = result[0].question.text;
console.log(question);
const outTag = document.querySelector("#out");
outTag.innerHTML = "<h3>" = question + "<h3>";
}