function saveDetails(productId, productImage, productName, price, weight, description) {
  const product = {
    productId: productId,
    productImage: productImage,
    productName: productName,
    price: price,
    weight: weight,
    description: description,
  };

  localStorage.removeItem("Product");
  localStorage.setItem("Product", JSON.stringify(product));
}

function renderProduct() {
  const oldDetails = document.getElementsByClassName(".individual-product");
  oldDetails.innerHTML = "";
  var product = JSON.parse(localStorage.getItem("Product"));
  var div = $('<div class="products-wrapper">');
  div.append(fetchProduct(product));
  $(".individual-product").append(div);
}

function fetchProduct(product) {
  return `
  <div class="product" key="${product.productId}">
  <a href="individual-product.html"><img class="product_image" src="${product.productImage}"></a>
  <h1 class="product_name">${product.productName}</h1>
  <h4 class="product_price">$ ${product.price}</h4>
  <h5 class="product_weight">${product.weight}</h5>
  <p class="product_description" >${product.description}</p>
  <button class="individual_add_to_basket" onclick="addToBasket(${product.productId})">Add to basket</button>
  </div>
  `;
}

function addToBasket(productId){
  cartQty(productList[productId - 1]);
  totalCost(productList[productId - 1]);
}