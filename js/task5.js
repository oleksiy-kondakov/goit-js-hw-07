const refs = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output')
};
refs.inputRef.addEventListener('input', handleTextInput);
function handleTextInput(event) {
    refs.inputRef.value
        ? refs.spanRef.textContent = event.target.value
        : refs.spanRef.textContent = 'незнакомец';
};