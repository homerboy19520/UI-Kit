import noUiSlider from "nouislider";
import wNumb from "../../../js/libs/wNumb";

var single = document.getElementById("single");

noUiSlider.create(single, {
  start: [50],
  connect: [true, false],
  range: {
    min: 0,
    max: 100,
  },
});

var duo = document.getElementById("duo");

noUiSlider.create(duo, {
  start: [30, 70],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

var singleOption = document.getElementById("singleOption");

noUiSlider.create(singleOption, {
  start: [15],
  connect: [true, false],
  range: {
    min: 0,
    max: 30,
  },
  tooltips: [wNumb({ decimals: 0 })],
});

var duoOption = document.getElementById("duoOption");

noUiSlider.create(duoOption, {
  start: [15, 34],
  connect: true,
  range: {
    min: 0,
    max: 50,
  },
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
});

var duoIcons = document.getElementById("duoIcons");

noUiSlider.create(duoIcons, {
  start: [15, 34],
  connect: [false, true, false],
  range: {
    min: 0,
    max: 50,
  },
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
});
