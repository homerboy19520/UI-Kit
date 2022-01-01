import Choices from "choices.js";
const navigation = document.querySelector(".navigation");

if (navigation) {
  const choices = new Choices(".navigation__select", {
    searchEnabled: false,
    itemSelectText: "",
  });
}
