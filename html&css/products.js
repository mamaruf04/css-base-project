const loadProducts = () =>{
    fetch("data.json")
    .then(res => res.json())
    .then(products => product(products));
}

// const product =  product.map(product => console.log(product));
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
            <button id="productMinus1" class="plus-minus">-</button>
            <input
              id="${id}"
              class="Qty-input"
              value="${Quantity}"
            /><button id="productPlus1" class="plus-minus">+</button>
          </div>
          <img
            onclick="resetBtn(1)"
            id="${id}"
            class="reset-product"
            src="img/redo.svg"
            alt=""
          />
        </div>
        <p>${id}</p>
        <p class="product-info">
          <strong
            >Price: $<span class="price" id="${id}">${Price}</span>
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

loadProducts()