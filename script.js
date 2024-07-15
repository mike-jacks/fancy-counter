const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

function handleIncrementCounter() {
  const currentValue = counterValueEl.textContent;
  if (currentValue >= 5) {
    // force counter to stay at 5
    counterValueEl.textContent = 5;

    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
    document.removeEventListener("keydown", handleKeyPressIncrease);
    document.removeEventListener("keydown", handleKeyPressDecrease);
  } else {
    counterValueEl.textContent++;
  }
  increaseButtonEl.blur();
}

function handleDecrementCounter() {
  const currentValue = counterValueEl.textContent;
  if (currentValue <= 0) {
    counterValueEl.textContent = 0;
  } else {
    counterValueEl.textContent--;
  }
  decreaseButtonEl.blur();
}

function handleResetCounter() {
  // set counter to 0
  counterValueEl.textContent = 0;
  // remove counter--limit color class
  counterEl.classList.remove("counter--limit");
  // reset title to 'Fancy Counter'
  counterTitleEl.innerHTML = "Fancy Counter";
  // re-enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  document.addEventListener("keydown", handleKeyPressIncrease);
  document.addEventListener("keydown", handleKeyPressDecrease);
  resetButtonEl.blur();
}

function handleKeyPressIncrease(e) {
  if (e.key === "+" || (e.shiftKey && e.key === "=")) {
    handleIncrementCounter();
  }
}

function handleKeyPressDecrease(e) {
  if (e.key === "-") {
    handleDecrementCounter();
  }
}

function handleKeyPressReset(e) {
  if (e.key === "r" || e.key === "R") {
    handleResetCounter();
  }
}

increaseButtonEl.addEventListener("click", handleIncrementCounter);

decreaseButtonEl.addEventListener("click", handleDecrementCounter);

resetButtonEl.addEventListener("click", handleResetCounter);

document.addEventListener("keydown", handleKeyPressIncrease);

document.addEventListener("keydown", handleKeyPressDecrease);

document.addEventListener("keypress", handleKeyPressReset);
