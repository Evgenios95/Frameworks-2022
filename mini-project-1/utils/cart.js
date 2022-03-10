const cartButtons = document.querySelectorAll(".add-to-basket");

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartQty(productList[i]);
    totalCost(productList[i]);
  });
}

function onLoadCartNumbers() {
  let productQty = localStorage.getItem("cartQty");
  if (productQty) {
    document.querySelector(".items-in-cart-number").textContent = productQty;
  }
}

function cartQty(product) {
  let productQty = localStorage.getItem("cartQty");
  productQty = parseInt(productQty);

  if (productQty) {
    localStorage.setItem("cartQty", productQty + 1);
    document.querySelector(".items-in-cart-number").textContent =
      productQty + 1;
  } else {
    localStorage.setItem("cartQty", 1);
    document.querySelector(".items-in-cart-number").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.productId] == undefined) {
      cartItems = {
        ...cartItems,
        [product.productId]: product,
      };
    }
    cartItems[product.productId].isInCart += 1;
  } else {
    product.isInCart = 1;
    cartItems = {
      [product.productId]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartTotalCost = localStorage.getItem("totalCost");
  cartTotalCost = Number(cartTotalCost);

  if (cartTotalCost == null) {
    localStorage.setItem("totalCost", product.price);
  } else {
    localStorage.setItem("totalCost", (cartTotalCost += product.price));
  }
}

function displayCart() {
  let cartTotalCost = localStorage.getItem("totalCost");

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if(cartItems == null){
    noCartItem();
    return
  }
  let productContainer = document.querySelector(".cart-products-wrapper");
  let priceContainer = document.querySelector(".cart-total-wrapper");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    priceContainer.innerHTML = "";

    Object.values(cartItems).map((item) => {
      const priceElement = item.discount === "no" ?  `<h3> DKK ${item.price},00 </h3>`:`<h3> DKK ${item.price},00 <span style="text-decoration: line-through; color: rgb(255, 0, 0);">${item.price + 10} DKK</span></h3>`;
      productContainer.innerHTML += `
            <div class="child-1" key="${item.productId}">
                <img src="${item.productImage}">
            </div>
            <div class ="child-2">
            <div>
                <h2> ${item.productName} </h2>`
          + priceElement +
          ` <h4 class ="total">Total item cost:  DKK ${
                  item.isInCart * item.price
                },00</h4>
                </div>
            </div>
            `;
    });

    priceContainer.innerHTML += `
        <h4 class= "cart-total-title">
        Basket Total
        </h4>
        <hr>
        <h4 class ="cart-total-cost">
            DKK ${cartTotalCost},00
        </h4>`;
  }
}

function noCartItem(){
  $(".cart-total-wrapper").remove();
  $('.cart-products-wrapper').css('display','flex');
  $(".cartProducts-grid-container").css("padding", 0);
  $(".cart-products-wrapper").append('<h3 id="noItemsMsg">You have no items in the shopping basket, please add items to view products in your basket.</h3>');
}

onLoadCartNumbers();
//run whenever the page loads
displayCart();


