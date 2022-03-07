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
  const oldDetails = document.getElementById("productdetails");
  oldDetails.innerHTML = "";
  var product = JSON.parse(localStorage.getItem("Product"));
  var div = $('<div class="product-center-container">');
  div.append(fetchProduct(product));
  $(".details").append(div);
}

function fetchProduct(product) {
  return `
  <div class="product" id="${product.productId}">
  <a href="pDescription.html"><img class="p_image" src="${product.productImage}"></a>
  <h1 class="p_title">${product.productName}</h1>
  <h4 class="p_price">$ ${product.price},00</h4>
  <p>${product.description}</p>
  <button class="itemsToCart">Add me</button>
</div>
  `;
}
