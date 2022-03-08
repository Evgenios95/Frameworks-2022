const loginSectionSelector = document.querySelector(".login-and-logo-section");
const navigationSelector = document.querySelector(".navigation-section");
const footerSelector = document.querySelector(".footer-section");

const appendNavigationAndFooter = () => {
  const loginAndLogoSection = `
    <p class="welcome-message">Log in to get started</p>

    <img src="../assets/logo.png" alt="Logo" class="coffeenator-logo" />

    <form class="login">
        <input type="text" placeholder="first name" class="user-input"  id="first-name" />
        <input type="text" placeholder="last name" class="user-input"  id="last-name" />
        <button class="login-button" onclick="onLogin()">&rarr;</button>
    </form>`;

  const navigationSection = `
    <ul>
      <li><a href="home-page.html">Home</a></li>
      <li><a href="products.html" class="allProd">All Products</a></li>
      <li><a class="drop" href="#">Categories</a>
        <ul>
          <li><button class="filter-button" onclick="filterProductCategory('Dark roast')">Dark Roast</button></li>
          <li><button class="filter-button" onclick="filterProductCategory('Medium roast')">Medium Roast</button></li>
          <li><button class="filter-button" onclick="filterProductCategory('Light roast')">Light Roast</button></li>
        </ul>
      </li>
      <li>
        <a href="cart.html">
            <div class="cart-icon-wrapper">
                <span class="shopping-cart-icon">
                    <i class="fas fa-shopping-basket"></i>
                </span>
                <div class="items-in-cart-number">
                    0
                </div>
            </div>
        </a>
      </li>
    </ul>`;

  let footerSection = `    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">Just a text here</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links" style="text-align: center">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links" style="text-align: center">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <hr>
      </div>

      <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
            <a href="#">Tradishional-GR</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a class="instagram" href="#"><i class="fab fa-instagram"></i> </a></li>
            <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i> </a></li>
          </ul>
        </div>
      </div>
    </div>`;

  loginSectionSelector.innerHTML = loginAndLogoSection;
  navigationSelector.innerHTML = navigationSection;
  footerSelector.innerHTML = footerSection;
};
