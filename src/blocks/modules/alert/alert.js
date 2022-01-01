const icons = document.querySelectorAll(".alert__svg");

const buttonText = document.querySelectorAll(".alert__button-text");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const button = icon.closest(".alert__modal");
    if (button) {
      button.classList.add("closed");
    }
  });
});

const button = document.querySelectorAll(".alert__button-red");

button.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".alert__red");
    if (modal) {
      modal.classList.add("closed");
    }
  });
});
