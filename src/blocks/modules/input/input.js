const input = document.querySelector(".input");
import Choices from "choices.js";

if (input) {
  const choicesTwo = new Choices(".input__select", {
    searchEnabled: false,
    itemSelectText: "",
  });

  const choicesThree = new Choices(".input__select-two", {
    searchEnabled: false,
    itemSelectText: "",
  });
}
