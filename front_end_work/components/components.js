function footer(){
    return`
    <div id="fotter_container">
    <div id="showupper">
      <div id="upper_fotter">
        <div class="inupper">
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/hk-cash-icon.svg"
            alt=""
          />
          <h3>Earn HK Cash</h3>
          <p>
            Shop with us and get HK Cash to redeem on your next purchase.
            Know more about HK Cash
          </p>
        </div>

        <div class="inupper">
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/safe-payment-icon.svg"
            alt=""
          />
          <h3>Safe Payments</h3>
          <p>
            Pay with the world’s most popular and secure payment methods.
          </p>
        </div>

        <div class="inupper">
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authenticity-icon.svg"
            alt=""
          />
          <h3>Authenicity Delivered</h3>
          <p>100% authentic products to our customers</p>
        </div>

        <div class="inupper" id="raj">
          <div id="imghold">
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/andriod-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/apple-icon.svg"
              alt=""
            />
          </div>
          <h3>Download Healthkart App</h3>
          <p>Get the best experience of Healthkart at your fingertips.</p>
          <div id="imghold2">
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/playstore-icon.svg"
              alt=""
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/appstore-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="upper_fotter2">
        <p>
          <span id="plus">➕</span> More Details about Health, Nutrition &
          Body Building Supplements
        </p>
      </div>
    </div>
    <div id="lower_fotter">
    <div id="imgcont">
      <img src="./img/Screenshot 2022-01-18 223113.png" alt="" />
    </div>
    <div id="imgcont2">
      <img src="./img/Screenshot 2022-01-18 222636.png" alt="" />
    </div>
  </div>`
}


function navbarfirst(){
    return `
    <div id="navbar">
    <div class="container">
      <div class="logo">
        <a href="index.html"><img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Healthkart.png"
          alt=""
          width="250"
          height="80"
        /></a>
      </div>
      <div class="search-div">
        <img
          id="searchpng"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/header/search-icon-grey-2.svg"
          alt=""
        />
        <input
          type="text"
          placeholder="Search for products, brands or Health Goals"
        />
      </div>

      <div class="nav-items">
        <div class="item-1">
          <p>Loyalty Rewards</p>
        </div>
        <p class="border1"></p>
        <div class="item-2">
          <p>Customer Support</p>
        </div>
        <div class="arrow">
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/header/arrow-down.svg"
          />
        </div>
        <p class="border2"></p>
        <div class="acc">
          <img
            src="https://static1.hkrtcdn.com/hknext/static/media/common/header/acc-icon.svg"
          />
        </div>
        <div class="item-3" id="go_to_login_page">
          <a href="./log.html">
            <p>My Accounts and Orders</p>
          </a>
        </div>

        <p class="border3"></p>
      </div>

      <div class="cart">
        <a href="./cart.html">
          <img id="gotocart"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/header/cart.svg"
          alt="cart"
          height="25px"
          />
          <p id="cart_quantity">0</p>
        </a>
      </div>
    </div>
  </div>

  <div id="nav" class="navbar2">
    <div class="nav-items-1"><p>Category</p></div>
    <div class="nav-items-2"><p>Brand</p></div>
    <div class="nav-items-3"><p>Gender</p></div>
    <div class="nav-items-4"><p>Goal</p></div>
    <div class="nav-items-5"><p>Bestsellers</p></div>
    <div class="nav-items-6"><p>Deals</p></div>
    <div class="nav-items-7"><p><a href="giftcard.html">Gift Card</a></p></div>
    <div class="nav-items-8"><p><a href="blog.html">Blog, Videos & More</a></p></div>

    <div class="rightPart">
      <div class="consult">
        <img
          class="video"
          src="	https://static1.hkrtcdn.com/hknext/static/media/common/header/hk-consult.svg"
          height="13px"
        />
        <p>HK Consult</p>
      </div>
      <div class="findStore">
        <img
          class="icon"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/header/location-pin.svg"
        />
        <p><a href="stores.html">Find a Store</a></p>
      </div>
    </div>
  </div>`
}



export {footer,navbarfirst}


// function navbarsecond(){
//     return `
//     `
// }