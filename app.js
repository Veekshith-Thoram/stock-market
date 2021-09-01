const submit = document.querySelector("#submit");
const currentPrice = document.querySelector("#current-price");
const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const outputEl = document.querySelector("#output");
const theme = document.querySelector("#theme");

function calculateTotalInitialPrice(price,quantity){
    var totalInitialPrice = price*quantity;
    return totalInitialPrice;
}

function calculateTotalCurrentPrice(price,quantity){
    var totalCurrentPrice = price*quantity;
    return totalCurrentPrice;
}

function calculateProfitOrLoss(initialPrice,totalPrice){
    var profit;
    var message="";
    var percentage;
    if(initialPrice<totalPrice){
        profit = totalPrice-initialPrice;
        percentage = (profit/initialPrice)*100;
        outputEl.style.backgroundColor = "#ef4fa6";
        message = `🤑Yay! you got a profit of ${profit} which equals to ${percentage}%🤑`
    } else if(initialPrice>totalPrice){
        profit = initialPrice-totalPrice;
        percentage = (profit/initialPrice)*100;
        outputEl.style.backgroundColor = "white"; 
        outputEl.style.fontFamily = "'ZCOOL KuaiLe', cursive";
        message = `😔Oops! you got a loss of ${profit} which equals to ${percentage}%😔`
    } else{
        message = "No Gain No Gain";
    }
    return message;
}

function clickHandler(){
    
    if(initialPrice.value&&currentPrice.value&&quantity.value !== ""){
    var totalInitialPrice = calculateTotalInitialPrice(Number(initialPrice.value),Number(quantity.value));
    var totalCurrentPrice = calculateTotalInitialPrice(Number(currentPrice.value),Number(quantity.value));
    var message = calculateProfitOrLoss(totalInitialPrice,totalCurrentPrice);
    if(message !== ""){
        outputEl.style.display = "block";
        outputEl.innerText = message;
    } else{
        outputEl.style.display = "none";
    }
    } else{
        if(message !== ""){
            outputEl.style.display = "block";
            outputEl.innerText = "Please enter all the fields";
        } else{
            outputEl.style.display = "none";
        }
    }
}

submit.addEventListener("click", clickHandler);