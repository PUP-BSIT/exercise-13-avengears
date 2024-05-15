let button = document.querySelector("button");

let textarea = document.querySelector("textarea");

let text = document.querySelector("text");


function checkInputs() {
  if (textarea.value.trim() !== "" && text.value.trim() !== "") {
    button.disabled = false; 
  } else {
    button.disabled = true; 
  }
}

textarea.addEventListener("input", checkInputs);
text.addEventListener("input", checkInputs);
