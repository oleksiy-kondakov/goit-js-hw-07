const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
const newElement = ingredients.forEach((elm) => {
    const element = document.createElement('li');
        element.textContent = elm;
    ulRef.append(element)
})
