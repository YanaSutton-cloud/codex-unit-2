// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
const divTag = document.getElementById("content");

console.log(divTag.innerHTML);
divTag.innerHTML = "<h1>Hello World!</h1>";
