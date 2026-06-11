// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
const divTag = document.getElementById("content");

console.log(divTag.innerHTML);
divTag.innerHTML = "<strong>Hello World!</strong>";
