function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existed = cart.find((e) => product.id === e.id);
  if (existed) {
    alert("item alredy added to you cart");
    return;
  }
  alert("item added to your cart");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displyCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("checkoutItems");
  let subTotal = document.getElementById("subTotal");
  let totalPrice = document.getElementById("totalPrice");
  let total = 0;
  cartItems.innerHTML = "";

  //   console.log(cart);
  cart.forEach((e) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("itemCart");
    cartItem.innerHTML = `
        <div class="imgName">
            <img src=${e.image} alt="">
            <div class="content">
                <h3>${e.description}</h3>
                <p class="priceCart">${"EGP" + e.price}</p>
            </div>
        </div>
        <button  class="deleteItem" onClick="deleteFromCart(${
          e.id
        })">Delete</button>
    `;
    cartItems.appendChild(cartItem);
    total += e.price;
  });

  subTotal.textContent = "EGP " + total;
  totalPrice.textContent = "EGP " + (50 + total);
}

function deleteFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((e) => e.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displyCart();
}
displyCart();
