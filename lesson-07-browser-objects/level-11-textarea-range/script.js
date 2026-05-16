// TODO: Read textarea and range values from form.elements and convert range to Number when needed.
// Example starter:
// const form = document.getElementById('sample-form');
// function handleSubmit(event) {
//   event.preventDefault();
//   const message = form.elements.message.value;
//   const volume = Number(form.elements.volume.value);
//   console.log(message, volume);
// }
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const message = form.elements.message.value;
  const volume = Number(form.elements.volume.value);
  console.log(message, volume);
}
