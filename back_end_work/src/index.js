const express = require('express');
const app = express();
app.use(express.json());

/**
 *  cors 👇
 */

const cors = require('cors');
app.use(cors());

/**
 *  productController 👇
 */

const productController = require('./controllers/product');
app.use('/product', productController);

/**
 *  cartController 👇
 */

const cartController = require('./controllers/cart');
app.use('/cart', cartController);

/**
 *  productProfileController 👇
 */

const productProfileController = require('./controllers/productProfile');
app.use('/product/profile', productProfileController);

/**
 *  register, login 👇
 */

const { register, login } = require('./controllers/auth');
app.post('/register', register);
app.post('/login', login);

/**
 *  payment 👇
 */

const payment = require('./controllers/payment');
app.use('/payment', payment);

/**
 * GooGle Oauth Service 👇
 */

const passport = require('./config/google-oauth');
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://127.0.0.1:5500/front_end_work/index.html',
    failureRedirect: '/auth/google/failure',
  })
);

/**
 * ---------------------------SERVER---------------------------
 *
 * ⚠ Please Dont Change Port Number let it be 4500 Only Strick Warning
 */

const port = 4500;
const connect = require('./config/db');
const { json } = require('express');
app.listen(port, async function () {
  try {
    await connect();
    console.log(`listing at port no ${port}`);
  } catch (e) {
    console.log(e);
  }
});
