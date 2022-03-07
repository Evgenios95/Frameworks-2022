const productList = [
  {
    productId: 1,
    productName: "Starbucks Espresso, 340gr",
    price: 59,
    description: "Dark roasted beans for your delightful morning...",
    category: "Dark roast",
    productImage: "../assets/product_images/cafe1.png",
    isInBasket: 0,
  },
  {
    productId: 2,
    productName: "Starbucks Holiday, 340gr",
    price: 59,
    description:
      "Enjoy our special blend of balanced and sweet flavours with herbal and maple notes made with the same high quality 100% Arabica beans.",
    category: "Medium roast",
    productImage: "../assets/product_images/cafe2.png",
    isInBasket: 0,
  },
  {
    productId: 3,
    productName: "Starbucks Pike Place, 340gr",
    price: 59,
    description:
      "Smooth with chocolate notes, Starbucks Pike Place Roast Whole Bean Coffee, ready to grind.",
    category: "Medium roast",
    productImage: "../assets/product_images/cafe3.png",
    isInBasket: 0,
  },
  {
    productId: 4,
    productName: "Starbucks Veranda Blend, 340gr",
    price: 59,
    description:
      "Lightly roasted Latin American coffee that is mellow and flavourful with a nice softness.",
    category: "Light roast",
    productImage: "../assets/product_images/cafe4.png",
    isInBasket: 0,
  },
  {
    productId: 5,
    productName: "Starbucks Blonde Espresso, 340gr",
    price: 59,
    description:
      "Soft and balanced, it highlights milk's sweeter side, making classic espresso drinks extra smooth without a roasty edge.",
    category: "Light roast",
    productImage: "../assets/product_images/cafe5.png",
    isInBasket: 0,
  },
  {
    productId: 6,
    productName: "Starbucks Home Blend, 340gr",
    price: 59,
    description:
      "Aroma, body and flavor all in balance. House Blend is a medium roast with notes of cocoa and toffee.",
    category: "Medium roast",
    productImage: "../assets/product_images/cafe6.png",
    isInBasket: 0,
  },
  {
    productId: 7,
    productName: "Starbucks Sumatra, 340gr",
    price: 59,
    description:
      "Full-bodied with a smooth mouthfeel, lingering notes of dried herbs and fresh earth, and almost no acidity.",
    category: "Dark roast",
    productImage: "../assets/product_images/cafe7.png",
    isInBasket: 0,
  },
  {
    productId: 8,
    productName: "Depresso Episk, 800gr",
    price: 139,
    description:
      "Dark hand-roasted organic espresso. Strong and fruity, with notes of citrus and almond and scents of caramel and chocolate.",
    category: "Dark roast",
    productImage: "../assets/product_images/depEpisk.png",
    isInBasket: 0,
  },
  {
    productId: 9,
    productName: "Depresso Magisk, 800gr",
    price: 139,
    description:
      "Medium hand-roasted coffee from Central America. Deliciously creamy and smooth with well-balanced acidity. Notes of nuts and chocolate. Tastes Magical.",
    category: "Medium roast",
    productImage: "../assets/product_images/depMagisk.png",
    isInBasket: 0,
  },
  {
    productId: 10,
    productName: "Depresso Sympati, 800gr",
    price: 139,
    description:
      "Medium roasted rounded and creamy coffee with a light note of spice. Smooth and creamy Java with a hint of citrus from Ethiopia.",
    category: "Medium roast",
    productImage: "../assets/product_images/depSympati.png",
    isInBasket: 0,
  },
  {
    productId: 11,
    productName: "Depresso Reboot, 800 gr",
    price: 139,
    description:
      "Medium hand-roasted organic coffee from Honduras. Fruity with notes of nuts and chocolate.",
    category: "Medium roast",
    productImage: "../assets/product_images/depReboot.png",
    isInBasket: 0,
  },
  {
    productId: 12,
    productName: "Depresso QuickFix, 800gr",
    price: 159,
    description:
      "Medium hand-roasted organic coffee from Peru. Formidable strong flavoured, with low-acidity and scent of caramel and fresh tobacco leaves.",
    category: "Medium roast",
    productImage: "../assets/product_images/depQuickFix.png",
    isInBasket: 0,
  },
  {
    productId: 13,
    productName: "Oro Quality, 1000gr",
    price: 99,
    description:
      "Oro is something special. Oro is the original Luigi Lavazza blend and thus the cornerstone of Lavazza's passion for coffee. The intense aroma of coffee has made it a favorite classic among passionate coffee drinkers and connoisseurs. The coffee is one of the finest 100% Arabica beans from Central America and the African highlands. Oro is full-bodied, soft and aromatic with a round refined taste.",
    category: "Medium roast",
    productImage: "../assets/product_images/Coffee13.png",
    isInBasket: 0,
  },
  {
    productId: 14,
    productName: "Lavazza iTierra! For Africa, 500gr",
    price: 99,
    description:
      "100% organic and sustainable quality coffee hand-picked in East Africa. The coffee is full-bodied and intense, which combines Arabica and Robusta in a wonderful combination - intensity 7/10. Lavazza iTierra! For Africa - The Lavazza Foundation supports the next generation of farmers through entrepreneurship and management training.",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee14.png",
    isInBasket: 0,
  },
  {
    productId: 15,
    productName: "Lavazza Espresso Barista Perfetto, 1000gr",
    price: 129,
    description:
      "Full-bodied and well-balanced espresso. The carefully selected coffee beans, and the gentle roasting, give the coffee characteristic notes of honey and roasted nuts. The aroma is unsurpassed and the texture of the coffee is rich and intense. With L’Espresso Gran Aroma, you feel like a barista in your own home. Because with L’Espresso Gran Aroma, you can achieve the taste of a traditional Italian coffee bar, in your own cozy and homely setting.",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee15.png",
    isInBasket: 0,
  },
  {
    productId: 16,
    productName: "Lavazza Rossa, 1000gr",
    price: 99,
    description:
      "Rossa is popular and the best-selling whole bean in Italy. That says a lot about the quality of a coffee. Rossa combines Arabica and Robusta beans from Brazil and Africa in an exquisite blend. The coffee is pleasant and full-bodied with an intense aroma and a taste of chocolate. The taste experience is pleasant and with an insistent finish. The rounded and rich taste of the coffee explains the popularity.",
    category: "Medium roast",
    productImage: "../assets/product_images/Coffee16.png",
    isInBasket: 0,
  },
  {
    productId: 17,
    productName: "Lavazza iTierra! For Amazon, 500gr",
    price: 59,
    description:
      "100% organic and sustainable quality coffee hand-picked in South America. The coffee is balanced and aromatic with notes of chocolate - intensity 5/10. Lavazza iTierra! For Amazonia - Lavazza Foundation continuously helps replant new rainforests in the region and protects the Amazon's environmental heritage.",
    category: "Light roast",
    productImage: "../assets/product_images/Coffee17.png",
    isInBasket: 0,
  },
  {
    productId: 18,
    productName: "Depresso Boost, 800gr",
    price: 199,
    description:
      "Dark hand-roasted beans. Dark and creamy espresso with a hint of sweetness and low-acidity. Lovely notes of chocolate and a scent of nuts.",
    category: "Dark roast",
    productImage: "../assets/product_images/depBoost.png",
    isInBasket: 0,
  },
  {
    productId: 19,
    productName: "Lavazza Tierra Organic Coffee, 1000gr",
    price: 99,
    description:
      "Tierra Organic is an exquisite organic blend, where only the best beans are selected consisting of 100% organic and sustainable Arabica beans grown in UTZ certified areas. The coffee is lovingly roasted according to authentic Italian tradition to achieve the perfect combination of taste and aroma. The coffee is round and balanced with fine floral and fruity undertones. Tierra! Organic is for you who want to enjoy an exquisite organic coffee and at the same time help to take good care of the environment. 100% Organic, 100% Sustainable, 100% Arabica",
    category: "Dark roast",
    productImage: "../assets/product_images/Coffee19.png",
    isInBasket: 0,
  },
  {
    productId: 20,
    productName: "Starbucks Breakfast, 340gr",
    price: 59,
    description:
      "Notes of sweet orange and brown sugar mingle in our lightest medium roast coffee.",
    category: "Medium roast",
    productImage: "../assets/product_images/cafe20.png",
    isInBasket: 0,
  },
];

function renderProducts(productList) {
  var div = $('<div class="product-center-container">');
  for (let i = 0; i < productList.length; i++) {
    div.append(fetchData(i));
    $(".mainProdSection").append(div);
  }
}

function fetchData(i) {
  return `
  <div class="product ${productList[i].productId}" >
  <h1 class="p_title">${productList[i].productName}</h1>
  <img class="p_image" src="${productList[i].productImage}">
  <h4 class="p_price">$${productList[i].price}</h4>
  <button class="itemsToCart">Add me</button><br><br>
  <a href="pDescription.html" button class="btn btn-light" style="background-color: #cc7511" onclick="saveDetails('${productList[i].productImage}', '${productList[i].productName}', '${productList[i].price}', '${productList[i].description}');">Details</button></a> 
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
