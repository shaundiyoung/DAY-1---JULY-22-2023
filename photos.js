
function add (){
    let amount = document.getElementById("amount").innerText;
    amount++;
    console.log(amount); // 1,2,3...n times when button is
    document.getElementById("amount").innerText = amount;
}

function subtract (){
    let amount = document.getElementById("amount").innerText;
    if (amount>0){
    amount--;
    console.log(amount); 
    document.getElementById("amount").innerText = amount;

    }
}



function add1 (){
    let amount = document.getElementById("amount1").innerText;
    amount++;
    console.log(amount); // 1,2,3...n times when button is
    document.getElementById("amount1").innerText = amount;
}

function subtract1 (){
    let amount = document.getElementById("amount1").innerText;
    if (amount>0){
    amount--;
    document.getElementById("amount1").innerText = amount;

    }
}