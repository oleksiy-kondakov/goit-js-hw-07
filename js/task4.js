const counterValue = document.querySelector("#value");
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]'); 
let value = 0;
function increment() {
    value += 1;
render()
};
function decrement() {
    value -= 1;
render()
};
function render() {
  counterValue.textContent = value;
}

buttonIncrementRef.addEventListener('click', increment)
buttonDecrementRef.addEventListener('click', decrement)