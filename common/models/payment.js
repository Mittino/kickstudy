'use strict';

module.exports = function(Payment) {

  var stripe = require("stripe")("sk_test_d3FQZt5rwLOd8i8nSxJIcQaH");

  // Token is created using Stripe.js or Checkout!
  // Get the payment token submitted by the form:
  // var token = request.body.stripeToken;
  //
  // // Charge the user's card:
  // var charge = stripe.charges.create({
  //   amount: 1000,
  //   currency: "usd",
  //   description: "Example charge",
  //   source: token,
  // }, function(err, charge) {
  //   // asynchronously called
  //   console.log(err);
  // });


  // 
  // makePayment.remoteMethod(
  //   'makePayment', {
  //     http: {
  //       path: '/pay',
  //       verb: 'post'
  //     },
  //     returns: {
  //       arg: 'status',
  //       type: 'string'
  //     }
  //   }
  // );
};
