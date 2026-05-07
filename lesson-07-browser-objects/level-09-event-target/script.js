// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  // TODO: call event.preventDefault() when experimenting
  // event.preventDefault();
  console.log(formTag.id);
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);

  // TODO: const form = event.target; use form.elements to access inputs
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
