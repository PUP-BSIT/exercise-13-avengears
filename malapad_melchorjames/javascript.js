var button = document.getElementById("button_01");
var textarea = document.getElementById("textarea_01");
var text = document.getElementById("input_01");

function checkInputs() {
  if (textarea.value.trim() !== "" && text.value.trim() !== "") {
    button.disabled = false; // Enable the button
  } else {
    button.disabled = true; // Disable the button
  }
}

textarea.addEventListener("input", checkInputs);
text.addEventListener("input", checkInputs);
