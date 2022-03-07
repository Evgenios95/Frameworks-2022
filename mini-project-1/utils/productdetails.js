function saveDetails(image, title, price, details, id) {
  const product = { img: image, tit: title, p: price, d: details, prID: id };
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
  <a href="pDescription.html"><img class="p_image" src="${product.img}"></a>
  <h1 class="p_title">${product.tit}</h1>
  <h4 class="p_price">$ ${product.p},00</h4>
  <p>${product.d}</p>
  <button class="itemsToCart"><img src="images/cartAdd.png" alt="Basket displayed here"></button>
</div>
  `;
}
