const form = document.getElementById("login-form");
form.onsubmit = handleSubmit;
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: dataString,
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  const message = result.message;
  const firstName = result.firstName;
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("success");
  if (message !== undefined) {
    errorEl.innerText = "Invalid Credentials";
    successTag.innerText = "";
  } else if (firstName !== undefined) {
    successEl.innerText = "You are logged in as " + firstName;
    errorTag.innerText = "";
    formTag.reset();
  }
}
