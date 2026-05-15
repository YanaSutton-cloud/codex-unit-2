// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
    note: form.elements.note.value,
  };
  const out = document.getElementById("data");
}

// TODO: build a `data` object from form.elements using indexes (e.g. form.elements[0].value)
// Example display: out.innerText = JSON.stringify(data, null, 2);
