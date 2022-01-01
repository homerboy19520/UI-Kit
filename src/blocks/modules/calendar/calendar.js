import Litepicker from "litepicker";

const picker = new Litepicker({
  element: document.getElementById("datepicker-arrival"),
  singleMode: false,
  format: "DD-MM-YY",
  numberOfMonths: 1,
  showTooltip: true,
  position: "bottom left",
  inlineMode: true,
  selectForward: true,
});
