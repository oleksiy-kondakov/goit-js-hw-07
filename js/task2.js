const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('ul');
const newElement = ingredients.forEach((elm) => {
    const element = document.createElement('li');
        element.textContent = elm;
    ulRef.append(element)
})
