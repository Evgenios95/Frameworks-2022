function saveDetails(productImage, productName, price, description, productId) {
  const product = {
    productImage: productImage,
    productName: productName,
    price: price,
    description: description,
    productId: productId,
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
  <div class="product" id="${product.productId}">
  <a href="individual-product.html"><img class="product_image" src="${product.productImage}"></a>
  <h1 class="product_name">${product.productName}</h1>
  <h4 class="product_price">$ ${product.price},00</h4>
  <p class="product_description" >${product.description}</p>
  <button class="add-to-basket">Add me</button>
</div>
  `;
}
