// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  fetch();
  const resultTag = document.getElementById("result");
  resultTag.innerText =
    "The fetch function takes in a URL and connects to a server.";
}
