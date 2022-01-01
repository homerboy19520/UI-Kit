const icons = document.querySelectorAll(".modal__icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const button = icon.closest(".modal__window");
    if (button) {
      button.classList.add("closed");
    }
  });
});
