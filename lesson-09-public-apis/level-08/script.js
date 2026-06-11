const formTag = document.getElementById("memeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    "api-key": "5f71845b4c384bd39d85b1e858bf218a",
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://api.humorapi.com/memes/random" + "?" + queryString,
  );
  const result = await response.json();
  const description = result.description;
  const src = result.url;
  const imageTag = document.getElementById("meme");
  const outputTag = document.getElementById("description");
  outputTag.innerText = description;
  imageTag.src = src;
}
