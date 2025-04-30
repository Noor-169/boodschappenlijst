const productPrices = document.getElementsByClassName("productPrice");
const productQuantities = document.getElementsByClassName("productQuantity");
const productTotalCosts = document.getElementsByClassName("productTotalCost");
const totalCost = document.getElementById("totalCost")

const groceryTable = document.getElementById("tabel");

groceryTable.addEventListener("change", calcTotalCost)

function calcTotalCost() {

  let tempTotalPrice = 0;

  for (let i = 0; i < productQuantities.length; i++) {
      let totalSubCost = +productPrices[i].textContent * productQuantities[i].value;

      tempTotalPrice += totalSubCost;

      productTotalCosts[i].textContent = totalSubCost.toFixed(2);
  }
   
  totalCost.textContent = tempTotalPrice.toFixed(2);
}

