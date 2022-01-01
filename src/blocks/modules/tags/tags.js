const tags = document.querySelectorAll(".tags__button");

if (tags) {
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const wrapper = tag.closest(".tags__box");
      if (wrapper) {
        wrapper.classList.add("closed");
      }
    });
  });
}
