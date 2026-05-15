// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    a: form.elements.a.value,
    b: form.elements.b.value,
    c: form.elements.c.value,
  };
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const user = await response.json();
  const id = user.id;
  const pTag = document.getElementById("v1");
  pTag.innerText = "user ID: " + id;
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
}
