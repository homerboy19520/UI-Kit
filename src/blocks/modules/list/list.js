const listButton = document.querySelectorAll(".list__button");
const items = document.querySelectorAll(".list__item");

const leftButton = listButton[0];
const rightButton = listButton[1];
let count = 0;

items[count].classList.add("list__item_active");

const buttonsVisible = (number, button) => {
  if (count === number) {
    button.classList.add("list__button_disable");
  } else {
    button.classList.remove("list__button_disable");
  }
};

buttonsVisible(4, rightButton);
buttonsVisible(0, leftButton);

const removeAllActive = () => {
  items.forEach((item) => item.classList.remove("list__item_active"));
};

const plus = () => {
  if (count >= 0 && count < 4) {
    // 0-3
    removeAllActive();
    count = count + 1;
    items[count].classList.add("list__item_active");
  }
  buttonsVisible(4, rightButton);
  buttonsVisible(0, leftButton);
};

const minus = () => {
  if (count > 0 && count <= 4) {
    //1-4
    removeAllActive();
    count = count - 1;
    items[count].classList.add("list__item_active");
  }
  buttonsVisible(4, rightButton);
  buttonsVisible(0, leftButton);
};

rightButton.addEventListener("click", plus);
leftButton.addEventListener("click", minus);
