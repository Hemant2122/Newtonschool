// javascript code goes here

const tableElement = document.getElementsByTagName("table")[0];
console.dir(tableElement);
const priceElement = document.querySelectorAll("[data-ns-test='price']");

let totalPrice = 0;
for(let i=0; i<priceElement.length; i++){
    const countPriceElement = priceElement[i];
    console.dir(countPriceElement);
    const value = countPriceElement.textContent;
    totalPrice += Number(value);
}
console.log(totalPrice);

const newTrElement = document.createElement("tr");
const newTdElement = document.createElement("td");

newTdElement.setAttribute("data-ns-test", "grandTotal");
newTdElement.textContent = totalPrice;

newTrElement.append(newTdElement);
tableElement.append(newTrElement);