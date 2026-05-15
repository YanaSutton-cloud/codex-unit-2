const form = document.getElementById("login-form");
form.onsubmit = handleSubmit;

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
    headers: { "Content-Type": "application/json" },
    body: "dataString",
  });
  const result = await response.json();
  const message = result.message;
  const errorTag = document.getElementById("error");
  errorTag.innerText = message;
}

const successE1 = document.getElementById("success");

if (form) {
  form.addEventListener("submit", async (event) => {
    console.log("submit handler placeholder");
  });
}
