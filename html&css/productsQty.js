// product input
// const productInput = document.getElementById("productInput1");
// product price 
// const productPrice = document.getElementById("productPrice1");

// increase & decrease function.
const counter = (productNumber, isIncreaseOrReset, Price) =>{

    // product price 
    const productPrice = document.getElementById('productPrice'+productNumber);

    // product quantity input field
    const productInput = document.getElementById('productInput'+ productNumber);

    // product quantity increase.
    let productInputValue = productInput.value;
    if(isIncreaseOrReset === null){
        productInputValue = 1;
    }
    else if(isIncreaseOrReset){
        productInputValue ++;
    } 
    else if (!isIncreaseOrReset && productInputValue > 1) {
        productInputValue --;
    }
    else{
        // sweet alert
        Swal.fire(
            'Please add some quantities!',
            '',
            'warning',
          )
    }

    // update product value.
    productInput.value = productInputValue;

    // product price based on quantity.
    let totalPrice = productInputValue * Price;
    productPrice.innerText = totalPrice;
}

// reset product
const resetBtn = (productNum) =>{
    const productPrice = document.getElementById('productPrice'+productNum).innerText;
    const productInput = document.getElementById('productInput'+ productNum).value;

    const perProductPrice = productPrice / productInput;
    counter(productNum,null,perProductPrice);


    
}

// minus button product-1.
document.getElementById("ProductMinus1").addEventListener('click', () => {

    counter(1,false,1150);

});

// plus button product-1.
document.getElementById("ProductPlus1").addEventListener('click', () => {

    counter(1,true,1150);

});
// minus button product-2.
document.getElementById("ProductMinus2").addEventListener('click', () => {

    counter(2,false,1250);

});

// plus button product-2.
document.getElementById("ProductPlus2").addEventListener('click', () => {

    counter(2,true,1250);

});
// minus button product-3.
document.getElementById("ProductMinus3").addEventListener('click', () => {

    counter(3,false,1280);

});

// plus button product-3.
document.getElementById("ProductPlus3").addEventListener('click', () => {

    counter(3,true,1280);

});
// minus button product-4.
document.getElementById("ProductMinus4").addEventListener('click', () => {

    counter(4,false,1150);

});

// plus button product-4.
document.getElementById("ProductPlus4").addEventListener('click', () => {

    counter(4,true,1150);

});
// minus button product-5.
document.getElementById("ProductMinus5").addEventListener('click', () => {

    counter(5,false,1150);

});

// plus button product-5.
document.getElementById("ProductPlus5").addEventListener('click', () => {

    counter(5,true,1150);

});
// minus button product-6.
document.getElementById("ProductMinus6").addEventListener('click', () => {

    counter(6,false,1150);

});

// plus button product-6.
document.getElementById("ProductPlus6").addEventListener('click', () => {

    counter(6,true,1150);

});
// minus button product-7.
document.getElementById("ProductMinus7").addEventListener('click', () => {

    counter(7,false,1150);

});

// plus button product-7.
document.getElementById("ProductPlus7").addEventListener('click', () => {

    counter(7,true,1150);

});
