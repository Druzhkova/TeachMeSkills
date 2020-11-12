const tipsData = [
  "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  "eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat ",
  "qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates",
  "earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias",
  "numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem",
  "culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
];

const notificationWrapper = document.querySelector(`.notification-wrapper`);
const closeButton = document.querySelector(`.close-button`);
const checkbox = document.querySelector(`#checkbox`);
const dotContainer = document.querySelector(`ul`);
const sliderControl = document.querySelector(`.slider-control`);
const tips = document.querySelector(`.tips`);

let timerId;
let currentIndex = 0;

const minIndex = 0;
const maxIndex = tipsData.length - 1;

function renderDots() {
  dotContainer.innerHTML = ``;
  tipsData.forEach((tip, index) => {
    const dot = `
    <li>
      <span class='dot ${
        index === currentIndex ? "active-dot" : ""
      }'>&#11050;</span>
    </li>
    `;
    dotContainer.innerHTML += dot;
  });
}

function renderTip() {
  tips.innerHTML = tipsData[currentIndex];
}

function closeTip() {
  notificationWrapper.style.display = `none`;
}

timerId = setTimeout(closeTip, 5000);

notificationWrapper.addEventListener(`click`, () => {
  clearTimeout(timerId);
});

closeButton.addEventListener(`click`, closeTip);

checkbox.addEventListener(`change`, () => {
  localStorage.setItem(`checked`, checkbox.checked);
});

function decrementIndex() {
  if (currentIndex === minIndex) {
    currentIndex = maxIndex;
  } else {
    currentIndex -= 1;
  }
}

function incrementIndex() {
  if (currentIndex === maxIndex) {
    currentIndex = minIndex;
  } else {
    currentIndex += 1;
  }
}

sliderControl.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`left-arrow`)) {
    decrementIndex();
  }
  if (evt.target.classList.contains(`right-arrow`)) {
    incrementIndex();
  }
  renderDots();
  renderTip();
});

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case 37: {
      decrementIndex();
      renderDots();
      renderTip();
      clearTimeout(timerId);
      break;
    }
    case 39: {
      incrementIndex();
      renderDots();
      renderTip();
      clearTimeout(timerId);
      break;
    }
    case 27: {
      closeTip();
      renderDots();
      renderTip();
      break;
    }
  }
});

window.addEventListener(`load`, () => {
  if (localStorage.getItem(`checked`) === `true`) {
  } else {
    renderDots();
    notificationWrapper.style.display = `flex`;
  }
});
