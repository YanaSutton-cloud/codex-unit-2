const form = document.getElementById("login-form");
form.onsubmit = handlesubmit;
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

async function handlesubmit(event) {
    event.preventDefault();
    const formTag = event.target;
    const data = {
      username: formTag.elemens.username.value,
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
const firstName = result.firstname;
const errorTag = document.getElementById("error");
const successTag = document.getElementById("success");
if (message) {
  errorTag.innerText = message;
  successTag.innerText = "";
} else if (firstName) {
successTag.innerText = "You are logged in as" + firstname;
errorTag.innerText = "";
formTag.reset();
}
} catch (error) {
  console.error("You need to use the POST method.");
  const errorTag = document.getElementById("error");
 } 
