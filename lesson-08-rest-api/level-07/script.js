// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    a: form.elements.a.value,
    b: form.elements.b.value,
    c: form.elements.c.value,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const user = await response.json();
  const id = user.id;
  const pTag = document.getElementById("result");
  pTag.innerText = "User ID: " + id;
}
