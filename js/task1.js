const catRef = document.querySelectorAll('.item')
console.log(`В списке ${catRef.length} категории`)
catRef.forEach(value =>
    console.log(`Категория: ${value.firstElementChild.textContent},`,
    `Количество элементов: ${value.querySelectorAll('li').length}`
    ))


