let button = document.getElementById("button");

let textarea = document.getElementById("textarea");

let text = document.getElementById("text");


function checkInputs() {
  if (textarea.value.trim() !== "" && text.value.trim() !== "") {
    button.disabled = false; // Enable the button
  } else {
    button.disabled = true; // Disable the button
  }
}

textarea.addEventListener("input", checkInputs);
text.addEventListener("input", checkInputs);
