// TODO: Read values from radio buttons and checkboxes using form.elements
// Example starter:
// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
const formTag = document.getElementById("sample-form");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.terget;
  const color = form.elements.color.value;
  const isSubscribed = form.elements.subscribe.checked;
  console.log(color);
  console.log(isSubscribed);
}
