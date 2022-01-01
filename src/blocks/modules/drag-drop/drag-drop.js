// Горизонтальный лоудер большой
const button = document.querySelector(".drag-drop__button");
const loader = document.querySelector(".drag-drop__loader");
const loaderActive = document.querySelector(".drag-drop__loader-progress");
const loaderActiveRound = document.querySelector(".drag-drop__svg");
const text = document.querySelector(".drag-drop__text_download");

button.addEventListener("click", () => {
  text.classList.add("drag-drop__text_active");
  function counter(ms, className) {
    let counter = 0;
    let interval = setInterval(() => {
      document.querySelector(className).innerHTML = ++counter;
      addResult();
      if (counter === 100) {
        text.classList.remove("drag-drop__text_active");
        clearInterval(interval);
      } else {
        false;
      }
    }, ms);
  }
  counter(20, ".drag-drop__numbers");
});

function addResult() {
  let progress = document.querySelector(".drag-drop__numbers").innerHTML;
  loaderActive.style.width = `${progress}%`;
}
addResult();

// круглый лоудер

const buttonSvg = document.querySelector(".drag-drop__button_upload");
const textSvg = document.querySelector("#count").innerHTML.trim();
const louder = document.querySelector(".drag-drop__circle");

buttonSvg.addEventListener("click", () => {
  louder.classList.remove("drag-drop__circle_done");

  function counter(ms, className) {
    let counter = 0;
    let interval = setInterval(() => {
      document.querySelector("#count").innerHTML = ++counter;
      addResultRound();
      if (counter === 100) {
        clearInterval(interval);
        louder.classList.add("drag-drop__circle_done");
      } else {
        false;
      }
    }, ms);
  }
  counter(20, "#textSvg");
  // counter принимает в себя по дефолту 20млс
});

function addResultRound() {
  let progress = document.querySelector("#count").innerHTML;
  let i = (louder.style.strokeDashoffset = `${314 - progress * 3.14}`);
  console.log(i);
}

addResultRound();

// Горизонтальный лоудер для файлов

const uploadsbButton = document.querySelector(".drag-drop__button_uploads");
const uploadsProgress = document.querySelector(".drag-drop__progress");

uploadsbButton.addEventListener("click", () => {
  function counter(ms) {
    let counter = 0;

    let interval = setInterval(() => {
      ++counter;
      uploadsProgress.style.width = `${counter}%`;
      if (counter === 100) {
        clearInterval(interval);
      } else {
        false;
      }
    }, ms);
  }
  counter(20);
  // counter принимает в себя по дефолту 20млс
});
