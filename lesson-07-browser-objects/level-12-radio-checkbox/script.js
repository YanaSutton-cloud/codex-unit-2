// TODO: Read values from radio buttons and checkboxes using form.elements
// Example starter:
// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

const color = form.nextElementSibling.color.value;
const isSubscribed = form.nextElementSibling.subscribe.checked;
