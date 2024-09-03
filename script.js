// FIRST UPDATE (on page loaded)
updateMoney(); //money txt
for (let i=0;i<shop.length;i++){
 shop[i].update() //buttons txt & price
}

//set main clicker function onClick
element.clicker.onclick = function() { 
 element.clicker.disabled = true;
 addMoney(); updateMoney(); 
 element.clicker.disabled = false;
};
