const stage = document.querySelector(".message-stage");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const closeButton = document.querySelector(".close-letter");

function openLetter() {
  stage.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  letter.setAttribute("aria-hidden", "false");
  closeButton.hidden = false;

  window.setTimeout(() => {
    letter.focus({ preventScroll: true });
  }, 650);
}

function closeLetter() {
  stage.classList.remove("is-open");
  envelope.setAttribute("aria-expanded", "false");
  letter.setAttribute("aria-hidden", "true");
  closeButton.hidden = true;
  envelope.focus({ preventScroll: true });
}

envelope.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && stage.classList.contains("is-open")) {
    closeLetter();
  }
});
