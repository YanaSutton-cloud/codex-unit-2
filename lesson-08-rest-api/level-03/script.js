// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  const queryString = new URLSearchParams(data);
  response = await fetch("https://jsonplaceholder.typicode.com/todos/1.");
  const result = await response.json();
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
  const pTag = document.getElementById("id");
  pTag.innerText =
    "'async` marks a funnction as asynchronous, 'await` pauses execution until the the asynchronous operation finishes and returns a value.";
}
