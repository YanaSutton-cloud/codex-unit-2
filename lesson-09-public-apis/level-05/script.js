const formTag = document.getElementById("search-form");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.category.value,
    diffculty: form.elements.diffculty.value,
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + queryString,
  );
  const result = await response.json();
  const questions = result[0].question.text;
  console.log(question);
  const outTag = document.querySelector("#out");
  outTag.innerHTML = "<h3>" + question + "<h3>";
}

// TODO: Build data object from formTag.elements and convert with URLSearchParams
// TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
// TODO: Parse `result` and display result[0].question.text into the DOM
