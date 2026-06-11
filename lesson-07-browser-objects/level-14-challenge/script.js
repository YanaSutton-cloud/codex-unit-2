const form = document.getElementById("demo-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const name = formTag.elements.name.value;
  const email = formTag.elements.email.value;
  if (name === "Yana") {
    form.reset(form);
  }
  const output = document.getElementById("out");
  output.innerText = "This demonstrates innnerText";
}
console.log("form-reset scaffold");

console.log(element.innerText);
element.innerText = "This demonstrates innerText.";
// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
