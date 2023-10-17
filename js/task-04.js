const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let value = 0;

incrementButton.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

decrementButton.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});
