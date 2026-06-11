// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic
const form = document.querySelector("#sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  // TODO: uncomment the next line when you want to prevent navigation
  // event.preventDefault();
  event.preventDefault();
  console.log(
    "submit handler: preventDefault not yet called (uncomment to test)",
  );
  console.log(
    "PreventDefault is a method that stops the browser from executing the default action associated with an event.",
  );
}

// Attach scaffold:
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
