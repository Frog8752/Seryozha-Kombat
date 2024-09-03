// script.js
const moneyText = document.querySelector('.money-text');
let money = 0;

// Функция для обновления счетчика
function updateMoney() {
  moneyText.textContent = money;
}

// Добавьте событие клика на кнопку
// (Предполагаем, что у вас есть кнопка с id="clicker")
const clickerButton = document.getElementById('clicker');
clickerButton.addEventListener('click', () => {
  money++;
  updateMoney();
});
