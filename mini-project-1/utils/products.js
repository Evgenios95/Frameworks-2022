const productList = [
  {
    productId: 1,
    productName: "Starbucks Espresso",
    weight: "340gr",
    price: 49,
    description: "Dark roasted beans for your delightful morning...",
    category: "Dark roast",
    productImage: "../assets/product_images/coffee1.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 2,
    productName: "Starbucks Holiday",
    weight: "340gr",
    price: 49,
    description:
      "Enjoy our special blend of balanced and sweet flavours with herbal and maple notes.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee2.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 3,
    productName: "Starbucks Pike Place",
    weight: "340gr",
    price: 49,
    description:
      "Smooth with chocolate notes, Starbucks Pike Place Roast Whole Bean Coffee, ready to grind.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee3.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 4,
    productName: "Starbucks Veranda Blend",
    weight: "340gr",
    price: 49,
    description:
      "Lightly roasted Latin American coffee that is mellow and flavourful with a nice softness.",
    category: "Light roast",
    productImage: "../assets/product_images/coffee4.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 5,
    productName: "Starbucks Blonde Espresso",
    weight: "340gr",
    price: 49,
    description:
      "Soft and balanced, it highlights the sweeter side of milk, making espresso drinks extra smooth.",
    category: "Light roast",
    productImage: "../assets/product_images/coffee5.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 6,
    productName: "Starbucks Home Blend",
    weight: "340gr",
    price: 49,
    description:
      "House Blend is a medium roast with notes of cocoa and toffee.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee6.png",
    isInCart: 0,
    discount: "10",
  },
  {
    productId: 7,
    productName: "Starbucks Sumatra",
    weight: "340gr",
    price: 49,
    description:
      "Full-bodied with a smooth mouthfeel, lingering notes of dried herbs and fresh earth.",
    category: "Dark roast",
    productImage: "../assets/product_images/coffee7.png",
    discount: "10",
  },
  {
    productId: 8,
    productName: "Depresso Episk",
    weight: "500gr",
    price: 139,
    description:
      "Strong and fruity, with notes of citrus and almond and scents of caramel and chocolate.",
    category: "Dark roast",
    productImage: "../assets/product_images/coffee8.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 9,
    productName: "Depresso Magisk",
    weight: "500gr",
    price: 139,
    description:
      "Deliciously creamy and smooth with well-balanced acidity. Notes of nuts and chocolate.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee9.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 10,
    productName: "Depresso Sympati",
    weight: "500gr",
    price: 139,
    description:
      "Smooth and creamy Java with a hint of citrus and light note of spice.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee10.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 11,
    productName: "Depresso Reboot",
    weight: "500gr",
    price: 139,
    description: "Fruity with notes of nuts and chocolate.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee11.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 12,
    productName: "Depresso QuickFix",
    weight: "500gr",
    price: 159,
    description:
      "Formidable strong flavoured, with low-acidity and scent of caramel and fresh tobacco leaves.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee12.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 13,
    productName: "Oro Quality",
    weight: "1kg",
    price: 99,
    description:
      "Original Luigi Lavazza blend with intense aroma of coffee. Full-bodied, soft and aromatic.",
    category: "Medium roast",
    productImage: "../assets/product_images/Coffee13.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 14,
    productName: "Lavazza !Tierra! For Africa",
    weight: "500gr",
    price: 99,
    description: "Full-bodied and intense - intensity 7/10.",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee14.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 15,
    productName: "Lavazza Espresso Barista Perfetto",
    weight: "1kg",
    price: 129,
    description:
      "Full-bodied and well-balanced espresso with notes of honey and roasted nuts.",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee15.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 16,
    productName: "Lavazza Rossa",
    weight: "1kg",
    price: 99,
    description:
      "The coffee is pleasant and full-bodied with an intense aroma and a taste of chocolate.",
    category: "Medium roast",
    productImage: "../assets/product_images/Coffee16.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 17,
    productName: "Lavazza !Tierra! For Amazonia",
    weight: "500gr",
    price: 59,
    description:
      "The coffee is balanced and aromatic with notes of chocolate - intensity 5/10.",
    category: "Light roast",
    productImage: "../assets/product_images/Ccoffee17.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 18,
    productName: "Depresso Boost",
    weight: "500gr",
    price: 199,
    description:
      "A hint of sweetness and low-acidity with notes of chocolate and a scent of nuts.",
    category: "Dark roast",
    productImage: "../assets/product_images/coffee18.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 19,
    productName: "Lavazza Tierra Organic Coffee",
    weight: "1kg",
    price: 99,
    description:
      "The coffee is round and balanced with fine floral and fruity undertones.",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee19.png",
    isInCart: 0,
    discount: "no",
  },
  {
    productId: 20,
    productName: "Starbucks Breakfast",
    weight: "340gr",
    price: 59,
    description:
      "Notes of sweet orange and brown sugar mingle in our lightest medium roast coffee.",
    category: "Medium roast",
    productImage: "../assets/product_images/coffee20.png",
    isInCart: 0,
    discount: "10",
  },
];

function renderProducts(productList) {
  for (let i = 0; i < productList.length; i++) {
    $(".products-wrapper").append(fetchProductCard(i));
  }
}

function fetchProductCard(i) {
  const priceElement =
    productList[i].discount == "no"
      ? `<h4 class="product_price">${productList[i].price} DKK</h4>`
      : `<h4 class="product_price">${
          productList[i].price
        }DKK <span style="text-decoration: line-through; color: rgb(255, 0, 0);">${
          productList[i].price + 10
        } DKK</span></h4>`;

  return (
    `
  <div key="${productList[i].productId}">
  <div class="product ${productList[i].category} ${
      productList[i].productName.split(" ")[0]
    }" >
  <img class="product_image" src="${productList[i].productImage}">
  <h1 class="product_name">${productList[i].productName}</h1>` +
    priceElement +
    `<h5 class="product_weight">${productList[i].weight}</h5>
  <a href="individual-product.html" button class="btn btn-outline-light" onclick="saveDetails('${productList[i].productId}', '${productList[i].productImage}', '${productList[i].productName}', '${productList[i].price}', '${productList[i].weight}', '${productList[i].description}');">Details</button></a> 
  <br><button class="add-to-basket">Add to basket</button>
  </div> 
  </div>
  `
  );
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
