// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  // TODO: prevent default when ready
  // event.preventDefault();
  // TODO: const form = event.target; const message = form.elements.message.value; display via innerText
  console.log(formTag.elements.message.value);
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
