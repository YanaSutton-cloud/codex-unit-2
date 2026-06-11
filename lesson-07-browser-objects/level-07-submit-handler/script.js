// TODO: Create a handleSubmit(event) function and assign it to form.onsubmit.
// Inside the handler, use console.log to explain `onsubmit`.
// Example starter:
// const form = document.getElementById('sample-form');
// function handleSubmit(event) { console.log('onsubmit handler'); }
// form.onsubmit = handleSubmit;
const form = document.querySelector("form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  console.log("onsubmit handler called");
  console.log(
    "OnSubmit is an event handler or HTML attribute that triggers a block of JavaScript code when a user submits a form",
  );
}
