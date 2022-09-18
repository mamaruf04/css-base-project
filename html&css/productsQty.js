// product input
const productInput = document.getElementById("productInput1");
// product price 
const productPrice = document.getElementById("productPrice");


// minus button.
document.getElementById("ProductMinus1").addEventListener('click', () => {

    let productInputValue = productInput.value;
    if(productInputValue > 0){
        productInputValue --;
    } 
    else alert("please add some quantities.");
    productInput.value = productInputValue;

    // product price based on quantity.
    let totalPrice = productInputValue * 1150;
    productPrice.innerText = totalPrice;
})

// plus button.
document.getElementById("ProductPlus1").addEventListener('click', () => {

    let productInputValue = productInput.value;
    productInputValue ++;
    productInput.value = productInputValue;

    // product price based on quantity.
    let totalPrice = productInputValue * 1150;
    productPrice.innerText = totalPrice;
})


document.getElementById("")