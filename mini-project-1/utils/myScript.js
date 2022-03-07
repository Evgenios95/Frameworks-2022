function addUserName() {
  const userName = localStorage.fname;
  if (userName !== undefined) {
    document.getElementById(
      "loginNameMessage"
    ).innerHTML = `Welcome back, ${userName}!`;
  }
}

function onLogin() {
  localStorage.clear();
  store();
  // console.log(localStorage);
}

function store() {
  let firstName = document.getElementById("fname");
  localStorage.setItem("fname", firstName.value);
  let lastName = document.getElementById("lname");
  localStorage.setItem("lname", lastName.value);
}

function renderProducts(products) {
  var div = $('<div class="product-center-container">');
  for (let i = 0; i < products.length; i++) {
    div.append(fetchData(i));
    $(".mainProdSection").append(div);
  }
}

function fetchData(i) {
  return `
  <div class="product ${products[i].id}" >
  <h1 class="p_title">${products[i].p_title}</h1>
  <img class="p_image" src="${products[i].p_image}">
  <h4 class="p_price">$${products[i].p_price}</h4>
  <button class="itemsToCart"><img src="images/cartAdd.png" alt="Basket displayed here"></button><br><br>
  <a href="pDescription.html" button class="btn btn-light" style="background-color: #cc7511" onclick="saveDetails('${products[i].p_image}', '${products[i].p_title}', '${products[i].p_price}', '${products[i].p_details}');">Details</button></a> 
  </div> 
  `;
}

function filterProductCategory(productType) {
  let prods = document.getElementsByClassName("product");

  for (var i = 0; i < prods.length; i++) {
    if (prods[i].className.indexOf(productType) > -1) {
      prods[i].style.display = "inline-block";
    } else {
      prods[i].style.display = "none";
    }
  }
}
