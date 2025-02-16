// Получаем элемент, где отображается счет
let counterElement = document.getElementById('counter');

// Начальное значение счета
let count = 0;

function incrementCounter() {
    // Увеличиваем счет на 1
    count++;

    // Обновляем текст элемента с текущим значением счета
    counterElement.textContent = count;
}