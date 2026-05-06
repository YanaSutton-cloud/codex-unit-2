const formTag = document.getElementById("search-form");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.category.value,
    difficulty: form.elements.difficulty.value,
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + queryString,
  );
  const result = await response.json();
  const question = result[0].question.text;
  const questionA = result[0].correctAnswer;
  const choiceB = result[0].incorrectAnswers[0];
  const choiceC = result[0].incorrectAnswers[1];
  const choiceD = result[0].incorrectAnswers[2];
  console.log(question);
  const questionTag = document.querySelector("#questions");
  const choiceTagA = document.querySelector("#choiceA");
  const choiceTagB = document.querySelector("#choiceB");
  const choiceTagC = document.querySelector("#choiceC");
  const choiceTagD = document.querySelector("#choiceD");
  questionTag.innerHTML = "<h3>" + question + "</h3>";
  choiceTagA.innerHTML = "<pre>A)" + choiceA + "</pre>";
  choiceTagB.innerHTML = "<pre>B)" + choiceB + "</pre>";
  choiceTagC.innerHTML = "<pre>C)" + choiceC + "</pre>";
  choiceTagD.innerHTML = "<pre>D" + choiceD + "</pre>";
}

// TODO: Fetch trivia questions with async/await
// TODO: Save first question to `question` and separate choices into variables
// TODO: Render question and choices into DOM
