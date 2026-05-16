const formTag = document.getElementById("memeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
  const data = { "api-key": "efc30af1a6df461" };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://api.humorapi.com/memes/random" + "?" + queryString,
  );
  const result = await response.json();
  const description = result.description;
  const src = result.url;
  const imageTag = document.getElementById("meme");
  const outputTg = document.getElementById("description");
  outputTag.innerText = description;
  imageTag.src = src;
}
