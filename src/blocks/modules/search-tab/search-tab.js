const line = document.querySelectorAll(".search-tab__line");

line.forEach((item) => {
  item.addEventListener("click", () => {
    let checkbox = item.querySelector(".checkbox__input");
    checkbox.toggleAttribute("checked");
  });
});
