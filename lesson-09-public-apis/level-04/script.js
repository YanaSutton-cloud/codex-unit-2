const formTag = document.getElementById("search-form");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.category.value,
    difficulty: form.elements.difficulty.value,
  };
  const queryString = new URLSearchParams(data);
  console.log("This is the query string: " + queryString);

  const params = new URLSearchParams({ category, difficulty });
  const query = params.toString();
}
