const cartButtons = document.querySelectorAll(".itemsToCart");

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartQty(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productQty = localStorage.getItem("cartQty");
  if (productQty) {
    document.querySelector(".itemsToBasket").textContent = productQty;
  }
}

function cartQty(product) {
  let productQty = localStorage.getItem("cartQty");
  productQty = parseInt(productQty);

  if (productQty) {
    localStorage.setItem("cartQty", productQty + 1);
    document.querySelector(".itemsToBasket").textContent = productQty + 1;
  } else {
    localStorage.setItem("cartQty", 1);
    document.querySelector(".itemsToBasket").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.productID] == undefined) {
      cartItems = {
        ...cartItems,
        [product.productID]: product,
      };
    }
    cartItems[product.productID].isInCart += 1;
  } else {
    product.isInCart = 1;
    cartItems = {
      [product.productID]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log('The products price is', product.p_price);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = Number(cartCost);
  // console.log(typeof cartCost);

  if (cartCost == null) {
    localStorage.setItem("totalCost", product.p_price);
  } else {
    localStorage.setItem("totalCost", (cartCost += product.p_price));
  }
}

function displayCart() {
  let cartCost = localStorage.getItem("totalCost");

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".gridItem");
  let priceContainer = document.querySelector(".basketTotalContainer");
  if (cartItems && productContainer) {
    //is there something there already?
    productContainer.innerHTML = "";
    priceContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class="child-1">
                <img src="${item.p_image}">
            </div>
            <div class ="child-2">
            <div>
                <h2> ${item.p_title} </h2>
                <h3> $${item.p_price},00 </h3>
                <h4 class ="total">Total item cost:  $${
                  item.isInCart * item.p_price
                },00</h4>
                </div>
            </div>
            `;
    });
    priceContainer.innerHTML += `
        <h4 class= "basketTotalTitle">
        Basket Total
        </h4>
        <hr>
        <h4 class ="basketTotal">
            $ ${cartCost},00
        </h4>`;
  }
}

onLoadCartNumbers();
//run whenever the page loads
displayCart();
