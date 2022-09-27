// load products
const loadProducts = () =>{
    fetch("data.json")
    .then(res => res.json())
    .then(products => product(products));
}
loadProducts();


const product = products => {

    const productParent = document.getElementById('productParent');
    products.forEach(product => {
        const {name,Brand,Model,Color,id,img,Quantity,Price} = product ;
        const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `<img class="box" src=${img} alt="" />
    <div class="product-module">
      <p class="product-name">
        <strong>${name}</strong> <br />
      </p>
      <div>
        <p class="product-info"><strong>Brand:</strong> ${Brand}.</p>
        <p class="product-info"><strong>Model:</strong> ${Model}.</p>
        <p class="product-info"><strong>Color:</strong> ${Color}.</p>
        <div class="product-info">
          <strong>Quantity:</strong>
          <div class="qty-bar">
            <button onclick="counter('${id}',false,'${Price}')"  class="plus-minus">-</button>
            <input
              id="${id}"
              class="Qty-input"
              value="${Quantity}"
            /><button onclick="counter('${id}',true,'${Price}')"  class="plus-minus">+</button>
          </div>
          <img
            onclick="resetBtn('${id}')"
            class="reset-product"
            src="img/redo.svg"
            alt=""
          />
        </div>
        <p class="product-info">
          <strong
            >Price: $<span class="price" id="${id}price">${Price}</span>
          </strong>
        </p>
      </div>
      </div>
            <button class="button">
              <i class="gg-shopping-cart"></i> Add To Cart
            </button>
          </div>`
      productParent.appendChild(productDiv);
    });      
}
// -----------------------------------------------------------------------------------------

// increase & decrease function.
const counter = (productId, isIncreaseOrReset, Price) =>{

  // product price 
  const productPrice = document.getElementById(productId+'price');

  // product quantity input field
  const productInput = document.getElementById(productId);

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
const resetBtn = (productId) =>{
  const productPrice = document.getElementById(productId+'price').innerText;
  const productInput = document.getElementById(productId).value;

  const perProductPrice = productPrice / productInput;
  counter(productId,null,perProductPrice);  
}

// -----------------------------------------------------
// load data from json file.
// const loadProductsDtls = (id, isIncreaseOrReset) =>{
//   // console.log(id);
//   fetch("data.json")
//   .then(res => res.json())
//   .then(products => {
//     const product = products.find((product) => product.id == id);
//     console.log(product);
//   });
// }






// const productDtl = (products) => {
//   products.map(product => {
//       // console.log(count);
//       const {id,name,Price,Quantity} = product ;
//       console.log(id,name,Price,Quantity);
//       })   
// }