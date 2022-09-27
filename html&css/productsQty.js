// // increase & decrease function.
// const counter = (productNumber, isIncreaseOrReset, Price) =>{

//     // product price 
//     const productPrice = document.getElementById(productNumber);

//     // product quantity input field
//     const productInput = document.getElementById(productNumber);

//     // product quantity increase.
//     let productInputValue = productInput.value;
//     if(isIncreaseOrReset === null){
//         productInputValue = 1;
//     }
//     else if(isIncreaseOrReset){
//         productInputValue ++;
//     } 
//     else if (!isIncreaseOrReset && productInputValue > 1) {
//         productInputValue --;
//     }
//     else{
//         // sweet alert
//         Swal.fire(
//             'Please add some quantities!',
//             '',
//             'warning',
//           )
//     }

//     // update product value.
//     productInput.value = productInputValue;

//     // product price based on quantity.
//     let totalPrice = productInputValue * Price;
//     productPrice.innerText = totalPrice;
// }

// // reset product
// const resetBtn = (productNum) =>{
//     const productPrice = document.getElementById('productPrice'+productNum).innerText;
//     const productInput = document.getElementById('productInput'+ productNum).value;

//     const perProductPrice = productPrice / productInput;
//     counter(productNum,null,perProductPrice);  
// }