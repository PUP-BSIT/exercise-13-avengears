let button = document.getElementById("button");

let textarea = document.getElementById("textarea");

let text = document.getElementById("text");


function checkInputs() {
  if (textarea.value.trim() !== "" && text.value.trim() !== "") {
    button.disabled = false; 
  } else {
    button.disabled = true; 
  }
}

textarea.addEventListener("input", checkInputs);
text.addEventListener("input", checkInputs);
