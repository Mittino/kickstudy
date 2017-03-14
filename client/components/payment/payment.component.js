(function(){
  angular.module("myApp")
    .component("payment", {
      controller: paymentController,
      templateUrl: '/components/payment/payment.html',
      bindings: {
        payment: '<'
      }
    });



    function paymentController(){
      var vm = this;


    }

})();
