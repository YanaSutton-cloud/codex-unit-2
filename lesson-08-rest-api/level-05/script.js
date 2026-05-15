// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await response.json();
  const userId = userdata.userId;
  const title = userdata.title;
  const isCompleted = userdata.Completed;
  const pTag1 = document.getElementById("username");
  const pTag2 = document.getElementById("email");
  const pTag3 = document.getElementById("id");
  pTag1.innerText = "User ID: " + userId;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Completed: " + isCompleted;
}
