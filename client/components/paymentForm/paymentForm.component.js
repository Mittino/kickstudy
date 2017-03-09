(function(){
  angular.module("myApp")
    .component("paymentForm", {
      controller: paymentFormController,
      templateUrl: "components/paymentForm/paymentForm.html"
    }
);

  function paymentFormController($stateParams, User, Payment){
    var vm = this;

    var userId = User.getCurrentId();

    var stripeHandler = StripeCheckout.configure({
      key: 'pk_test_b81q4zEFwR8qL4foV3D0amuT',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      zipCode: true,
      token: function(token) {
        console.log(token);

        vm.pendingPayment = true;

        Payment.makePayment({
          amount: vm.paymentAmount,
          tokenId: token.id,
          studyId: $stateParams.id,
          userId: userId
        })
          .$promise
          .then(function(response) {
            vm.pendingPayment = false;
            vm.paymentSuccess = true;
            vm.payment = response.response;
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    });

    vm.showPymtForm = function(){
      vm.showComments = false;
      // vm.showPaymentForm = !vm.showPaymentForm;

      stripeHandler.open({
        name: 'Kickstudy',
        description: 'Fund a Study',
        amount: Math.abs(vm.paymentAmount * 100)
      });
    };
  }

})();
