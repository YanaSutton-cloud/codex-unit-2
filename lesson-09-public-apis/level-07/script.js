const divTag = document.getElementById("message");
divTag.innerHTML =
  "<h4>An API Key is a unique code that must be attached to each request to the API server.</h4>";

if (messageEl) {
  messageEl.innerText =
    "API keys identify your app to a service; do not commit them publicly.";
}
