const form = document.getElementById("demo-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const username = formTag.elements.username.value;
  if (username === "Yana") formTag.reset;
}
console.log("form-reset scaffold");

console.log(element.innerText);
element.innerText = "This demonstrates innerText.";
// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
