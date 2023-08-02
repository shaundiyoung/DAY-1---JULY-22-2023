
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