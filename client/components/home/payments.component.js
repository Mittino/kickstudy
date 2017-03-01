(function(){
  angular.module("myApp")
    .component("home", {
      controller: paymentController,
      templateUrl: '/components/payment/payment.html',
      bindings: {
        payments: '<'
      }
    });



    function paymentController(){
      var vm = this;
      console.log("home");

      vm.$onChanges = function(){
        console.log(vm.payments, "payments");
      };

    }

})();
