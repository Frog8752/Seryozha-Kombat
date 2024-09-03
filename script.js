// FIRST UPDATE (on page loaded)
updateMoney(); //money txt
for (let i = 0; i < shop.length; i++) {
  shop[i].update(); //buttons txt & price
}

//set main clicker function onClick
element.clicker.onclick = function() { 
  element.clicker.disabled = true;
  addMoney();
  updateMoney();
  element.clicker.disabled = false;
};

// Function to format number with K, M, B suffixes
function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"; 
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
}

// Function to update the displayed money amount
function updateMoney() {
  // Assuming you have an element with the class 'money' to display the money
  let moneyElement = document.querySelector('.money');
  if (moneyElement) {
    moneyElement.textContent = formatNumber(currentMoney); // Assuming currentMoney is a variable holding the money amount
  }
}

// Function to update the displayed price and button text for shop items
function updateShopItem(item) {
  // Assuming the shop item has classes 'price' and 'button' for price and text
  let priceElement = item.querySelector('.price');
  let buttonElement = item.querySelector('.button');
  if (priceElement && buttonElement) {
    priceElement.textContent = formatNumber(item.price); 
    buttonElement.textContent = item.name; // Assuming you have a 'name' property in your shop item object
  }
}

// Update shop items on page load
for (let i = 0; i < shop.length; i++) {
  updateShopItem(shop[i]); 
}
