// load products
const loadProducts = () =>{
    fetch("data.json")
    .then(res => res.json())
    .then(products => product(products,true));
}
loadProducts();

const product = (products,topOrAverage) => {
    const AverageProducts = document.getElementById('AverageProducts');
    const topProducts = document.getElementById('topProducts');
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
            <button onclick="addToCart('${id}')" class="button">
              <i class="gg-shopping-cart"></i> Add To Cart
            </button>
          </div>`
          if(topOrAverage){
            AverageProducts.appendChild(productDiv);
          }else{
            topProducts.appendChild(productDiv);
          }
          
    });      
}

window.location.hash ='#nav-bar'
const goHome = () => {
  window.location.hash ='#home'
}
// -----------------------------------------------------------------------------------------
// increase & decrease function.
const counter = (productId, isIncreaseOrReset, Price) =>{

  // product price 
  const productPrice = document.getElementById(productId+'price');

  // product quantity input field
  const productInput = document.getElementById(productId);

  // product quantity increase.
  let productQuantityValue = productInput.value;
  if(isIncreaseOrReset === null){
      productQuantityValue = 1;
  }
  else if(isIncreaseOrReset){
      productQuantityValue ++;
  } 
  else if (!isIncreaseOrReset && productQuantityValue > 1) {
      productQuantityValue --;
  }
  else{
      // sweet alert
      Swal.fire(
          'Please add some quantities!',
          "",
          'warning',
        )
  }
  // update product value.
  productInput.value = productQuantityValue;

  // product price based on quantity.
  let totalPrice = productQuantityValue * Price;
  productPrice.innerText = totalPrice;
  addToLocalStorage(productId,productQuantityValue,totalPrice);
}
// reset product 
const resetBtn = (productId) =>{
  const productPrice = document.getElementById(productId+'price').innerText;
  const productInput = document.getElementById(productId).value;

  const perProductPrice = productPrice / productInput;
  counter(productId,null,perProductPrice);  
}

const getFromLocalStorage = () =>{

  const cart = localStorage.getItem('cart');
  let cartObj;
  if(cart){
    cartObj = JSON.parse(cart);
  }
  else{
    cartObj = {};
  }
  return cartObj;
}

// // set localStorage data
const addToLocalStorage = (id,productQuantityValue) =>{
  const cart = getFromLocalStorage(); 
  cart[id] = productQuantityValue;

const Product = JSON.stringify(cart);
localStorage.setItem('cart',Product);
}


// when cart is empty the cart container will hidden.
const isEmptyCart = () => {
  const card = document.getElementById('carts');
    if (card.innerHTML == "") {
      card.parentNode.style.display="none";
    }
    else{
      card.parentNode.style.display="flex";
    }
}
isEmptyCart();

// -----------------------------------------------------
// load data from json file.
const addToCart = (id) =>{
  fetch("data.json")
  .then(res => res.json())
  .then(products => {
    const storeCart = localStorage.getItem('cart');
    const storeCartParse = JSON.parse(storeCart);
    const qty = storeCartParse[id];
    const carts = document.getElementById('carts');
    const product = products.find((product) => product.id == id );
    const {name,img,Model,Price} = product;
    const cart = document.createElement('div');
    cart.classList.add('cart');
    cart.innerHTML = `
      <img class="cart-img" src="${img}" alt="" />
      <div class="cart-info">
        <h2 class="cart-name">${name}</h2>
        <p class="cart-text"><strong>Model:</strong> ${Model}</p>
        <p class="cart-text"><strong>Quantity:</strong> ${qty}</p>
        <p class="cart-text"><strong>Price:</strong> $${Price * qty}</p>
        </div>
      <img id="dlt${id}" class="dlt-icon" src="img/delete-2.svg" alt="" />`
      
    carts.appendChild(cart);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add to cart successfully!',
      showConfirmButton: false,
      timer: 800
    })

    // delete function----------
    document.getElementById(`dlt${id}`).addEventListener('click', () => {
      // sweet alert------
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          carts.removeChild(cart);
          localStorage.removeItem('cart')
          isEmptyCart();
        }
      })
    })

    isEmptyCart(); 

  });
  
}
document.getElementById('topProductSection').style.display = 'none';
    const topBrands = Brand => {
      fetch("data.json")
      .then(res => res.json())
      .then(TopBrands => {
        const topProducts = document.getElementById('topProducts');
        topProducts.textContent= "";
        document.getElementById('topProductSection').style.display = 'block';
        const topBrands = TopBrands.filter( TopBrand => TopBrand.Brand == Brand);
        product(topBrands,false);
        })
      .catch(error => console.log("something went wrong!"))
      
        
    }