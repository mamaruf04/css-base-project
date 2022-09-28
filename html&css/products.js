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
            <button onclick="loadProductsDtls('${id}')" class="button">
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
const loadProductsDtls = (id) =>{
  fetch("data.json")
  .then(res => res.json())
  .then(products => {
    const carts = document.getElementById('carts');
    const product = products.find((product) => product.id == id);
    const {name,img,Model,Quantity,Price,Color} = product;
    const cart = document.createElement('div');
    cart.classList.add('cart');
    cart.innerHTML = `
      <img class="cart-img" src="${img}" alt="" />
      <div class="cart-info">
        <h2 class="cart-name">${name}</h2>
        <p class="cart-text"><strong>Model:</strong> ${Model}</p>
        <p class="cart-text"><strong>Quantity:</strong> ${Quantity}</p>
        <p class="cart-text"><strong>Price:</strong> $${Price}</p>
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
          isEmptyCart();
        }
      })
    })

    isEmptyCart(); 

  });
  // Document.getElementById('apple').addEventListener('click', () => {
  //   console.log('get the apple')
  //   const topBrands = Brand => {
  //     fetch("data.json")
  //     .then(res => res.json())
  //     .then(TopBrands => {
  //       console.log(TopBrands);
  //       const TopBrand = TopBrand.find( TopBrands.Brand == Brand);
  //       topBrands(APPLE);
  //       console.log(TopBrands);
  //       })
  //   }
  // })
}