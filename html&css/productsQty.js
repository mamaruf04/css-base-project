// product input
const productInput = document.getElementById("productInput1");
// product price 
const productPrice = document.getElementById("productPrice");

// increase & decrease function.
const counter = (isIncrease) =>{
    let productInputValue = productInput.value;
    if(isIncrease){
        productInputValue ++;
    } 
    else if (!isIncrease && productInputValue > 1) {
        productInputValue --;
    }
    else{
        alert("please add some quantities.");
    }
    productInput.value = productInputValue;
    // product price based on quantity.
    let totalPrice = productInputValue * 1150;
    productPrice.innerText = totalPrice;
}


// minus button.
document.getElementById("ProductMinus1").addEventListener('click', () => {

    counter(false);

});

// plus button.
document.getElementById("ProductPlus1").addEventListener('click', () => {

    counter(true);

});
