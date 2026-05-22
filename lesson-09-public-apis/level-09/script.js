const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = form.elements.meme.value;

  const data = { "api-key": "" };
  const queryString = new URLSearchParams(data);
  const respone = await fetch(url + "?" + queryString + "api=");
  const result = await response.json();
  const description = result.description;
  const src = result.url;
  const imageTag = document.getElementById("meme");
  const outputTag = document.getElementById("description");
  outputTag.innerText = description;
  imageTag.src = src;
}

// TODO: Construct `data` from formTag.elements
// TODO: Format data with `URLSearchParams` or `JSON.stringify`
// TODO: Save formatted data into `dataString` and send via fetch using async/await
// TODO: Parse `result` and update the page; handle errors with try/catch
