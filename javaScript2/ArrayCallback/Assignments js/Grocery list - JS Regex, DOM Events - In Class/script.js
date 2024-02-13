let count = 0;

function calcTotal() {
    if(count > 0){
        const elem = document.querySelector("body > table > tbody > tr:nth-child(5)");
        elem.remove();
    }

    const tableElement = document.getElementsByTagName("tbody")[0];
    const priceElement = document.querySelectorAll("[data-ns-test='price']");

    let totalPrice= 0;
    for(let i=0;i<priceElement.length;i++){
        const countElement = priceElement[i];
        const value = countElement.textContent;
        totalPrice += Number(value);
    }

    const newTRElement = document.createElement("tr");
    const newTDElement1 = document.createElement("td");
    const newTDElement2 = document.createElement("td");

    newTDElement2.setAttribute("data-ns-test", "grandTotal");
    newTDElement2.textContent = totalPrice;

    newTDElement1.textContent = "Grand Total";

    newTRElement.append(newTDElement1);
    newTRElement.append(newTDElement2);

    tableElement.append(newTRElement);

  count++;  
}