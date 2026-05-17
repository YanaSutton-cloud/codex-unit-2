const divTag = document.getElementById("message");
divTag.innerHTML =
  "<h4>An API Key is a unique code that must be attached to each request to the API server.</h4>";

const data = {
  api: "5f71845b4c384bd39d85b1e858bf218a",
};
const queryString = new URLSearchParams(data);
fetch("http://url.com" + "?" + "api=5f71845b4c384bd39d85b1e858bf218a");

if (messageEl) {
  messageEl.innerText =
    "API keys identify your app to a service; do not commit them publicly.";
}
