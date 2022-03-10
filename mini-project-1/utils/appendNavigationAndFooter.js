const loginSectionSelector = document.querySelector(".login-and-logo-section");
const navigationSelector = document.querySelector(".navigation-section");
const footerSelector = document.querySelector(".footer-section");

const appendNavigationAndFooter = () => {
  const loginAndLogoSection = `
      <nav class="navbar navbar-expand-lg container-fluid" id="navigation-bar" role="navigation">
      <div class="container">
          <a class="navbar-brand" href="home-page.html"><img class="coffeenator-logo" src="../assets/logo.png"></img></a>
          <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
              &#9776;
          </button>
          <div class="collapse navbar-collapse" id="exCollapsingNavbar">
              <ul class="nav navbar-nav " style='background-color:transparent'>
                  <li class="nav-item " ><a href="home-page.html" class="nav-link text-dark" id="navigation-link-text">Homepage</a></li>
                  <li class="nav-item"><a href="products.html" class="nav-link text-dark" id="navigation-link-text">Products</a></li>
                  <li class="nav-item"><a href="cart.html" class="nav-link text-dark" id="navigation-link-text">Basket <i style="font-size:18px" class="fa">&#xf291;</i></a></li>
                  <li style="align-self: center">
                      <span class="items-in-cart-number">
                          0
                      </span>
                </li>
              </ul>
              <div id="loggedInElement"></div>
              <ul class="nav navbar-nav flex-row justify-content-between ml-auto" id="loginElement">
              <li class="dropdown order-1">
                      <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle text-white">Login <span class="caret"></span></button>
                      <ul class="dropdown-menu dropdown-menu-right mt-2">
                        <li class="px-3 py-2">
                            <form class="form" role="form" onsubmit="login()">
                                  <div class="form-group">
                                      <input id="name" placeholder="Email" class="form-control form-control-sm" type="text" required="" style="width:200px">
                                  </div>
                                  <div class="form-group">
                                      <input id="password" placeholder="Password" class="form-control form-control-sm" type="password   " required="" style="width:200px">
                                  </div>
                                  <div class="form-group">
                                      <button type="submit" class="btn btn-primary btn-block">Login</button>
                                  </div>
                                  <div class="form-group text-center">
                                      <small><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot password?</a></small>
                                  </div>
                              </form>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

    <div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h3>Forgot password</h3>
                  <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div class="modal-body">
                  <p>Reset your password..</p>
              </div>
              <div class="modal-footer">
                  <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                  <button class="btn btn-primary">Save changes</button>
              </div>
          </div>
      </div>
    </div>`;

  const navigationSection = `
    <ul>
      <li><a href="home-page.html">Home</a></li>
      <li><a href="products.html" class="allProd">All Products</a></li>
      <li><a class="drop" href="#">Categories</a>
        <ul>
          <li><button class="filter-button" onclick="filterProductCategory('Dark roast')">Dark Roast</button></li>
          <li><button class="filter-button" onclick="filterProductCategory('Medium roast')">Medium Roast</button></li>
          <li><button class="filter-button" onclick="filterProductCategory('Light roast')">Light Roast</button></li>
          <li><button class="filter-button">All products</button></li>
        </ul>
      </li>
      
    </ul>`;

  let footerSection = `    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">Coffeenator was created to give you a one-stop to buy quality coffee beans from around the world, and deliver to your door step. Coffenator is located in Copenhagen, Denmark.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links" style="text-align: center">
            <li><a href="#">Lightly roasted selection</a></li>
            <li><a href="#">Medium roasted selection</a></li>
            <li><a href="#">Dark roasted selection</a></li>
            <li><a href="#">Discounts</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links" style="text-align: center">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
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
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
            <a href="#">Coffeenator®</a>.
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
  // navigationSelector.innerHTML = navigationSection;
  footerSelector.innerHTML = footerSection;
  checkLogin();
};


function checkLogin(){
  if(localStorage.getItem('user') === null){
    localStorage.setItem('user','')
  }
  if(localStorage.getItem('user') !== ''){
    swapLoginElements();
    return;
  }
}

function swapLoginElements(){
  $("#loginElement").remove();
  $("#exCollapsingNavbar").append(`
    <div class="ml-auto loggedinMessage" >
      <h3>
      Welcome ` + localStorage.getItem('user') + `
      </h3>
      </div>
      <div onclick="logout()" class="logoutButton">Logout</div>
    `)
}