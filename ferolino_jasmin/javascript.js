let button = document.getElementById("button");

var textarea = document.getElementById("textarea");
var text = document.getElementById("text");

function checkInputs() {
  if (textarea.value.trim() !== "" && text.value.trim() !== "") {
    button.disabled = false; // Enable the button
  } else {
    button.disabled = true; // Disable the button
  }
}

textarea.addEventListener("input", checkInputs);
text.addEventListener("input", checkInputs);
