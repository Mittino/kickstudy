'use strict';

module.exports = function(Payment) {

  var stripe = require("stripe")("sk_test_d3FQZt5rwLOd8i8nSxJIcQaH");

  Payment.makePayment = function(amount, tokenId, studyId, userId, cb) {
    // console.log(amount);
    // console.log(token);
    // console.log(studyId);
    // console.log(userId);

    // Charge the user's card:
    stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "Kickstudy payment for Study",
      source: tokenId,
    }, function(err, charge) {
      if (charge) {
        console.log(charge);
        // TODO: Save a payment record in the DB with the token in it (or as a separate related model)
        cb(null, {
          amount: charge.amount,
          description: charge.description
        });
      } else if (err) {
        console.log(err);
      }
    });
  };

  Payment.remoteMethod('makePayment', {
    accepts: [
      {arg: 'amount', type: 'number', required: true},
      {arg: 'tokenId', type: 'string', required: true},
      {arg: 'studyId', type: 'string', required: true},
      {arg: 'userId', type: 'string', required: true}
    ],
    http: {
      path: '/make-payment',
      verb: 'post'
    },
    returns: {
      arg: 'response',
      type: 'Object'
    }
  });

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
};
