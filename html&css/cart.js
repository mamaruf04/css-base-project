// load data from json file.
// const loadProductsDtls = (id) =>{
//   fetch("data.json")
//   .then(res => res.json())
//   .then(products => {
//     const carts = document.getElementById('carts');
//     const product = products.find((product) => product.id == id);
//     const {name,img,Model,Quantity,Price,Color} = product;
//     const cart = document.createElement('div');
//     cart.classList.add('cart');
//     cart.innerHTML = `
//       <img class="cart-img" src="${img}" alt="" />
//       <div class="cart-info">
//         <h2 class="cart-text">${name}</h2>
//         <p class="cart-text"><strong>Model:</strong> ${Model}</p>
//         <p class="cart-text"><strong>Quantity:</strong> ${Quantity}</p>
//         <p class="cart-text"><strong>Price:</strong> $${Price}</p>
//         </div>
//       <img class="dlt-icon" src="img/delete-2.svg" alt="" />`
//       console.log(carts);
//       console.log(cart);
//     carts.appendChild(cart);
//   });
// }