// script.js
const moneyText = document.getElementById('money'); // Используйте ID элемента
let money = 0;

// Функция для обновления счетчика
function updateMoney() {
  moneyText.textContent = money;
}

// Добавьте событие клика на кнопку
// (Предполагаем, что у вас есть кнопка с id="clicker")
const clickerButton = document.getElementById('main-clicker'); // Используйте ID элемента
clickerButton.addEventListener('click', () => {
  money++;
  updateMoney();
});
