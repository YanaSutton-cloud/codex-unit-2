// TODO: Select element with getElementById('desc') into `element`, log previous innerText, then set a new string.
// Example starter:
// const element = document.getElementById('desc');
// console.log('before:', element.innerText);
const pTag = document.getElementById("desc");

console.log(pTag.innerText);
pTag.innerText = "Hello World!";
console.log(pTag.innerText);
