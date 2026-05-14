// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()

const form = document.querySelector("form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const username = formTag.elements.username.value;
  if (username === "Yana") formTag.reset;
  // event.preventDefault();
  // const form = event.target;
  // TODO: validate fields, show summary in DOM, then call form.reset();
  console.log("form-reset scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
// TODO: Implement submit handling that validates fields and calls form.reset() when appropriate.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const firstName = form.elements.firstName.value;
//   const lastName = form.elements.lastName.value;
//   if (firstName === 'Bob') { form.reset(); }
// }
