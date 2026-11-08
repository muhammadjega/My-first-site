console.log("Script loaded!");

const button = document.getElementById("myButton");
const message = document.getElementById("message");
let clicks = 0;

button.addEventListener("click", function () {
  clicks = clicks +1;
  message.textContent = "You clicked " + clicks + " times";
});