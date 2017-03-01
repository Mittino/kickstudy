(function(){
  angular.module("myApp")
    .component("payment", {
      controller: paymentController,
      templateUrl: '/components/payment/payment.html',
      bindings: {
        payment: '<'
      }
    });



    function paymentController(moment){
      var vm = this;
      console.log("payment");

      vm.$onChanges = function(){
        console.log(vm.payment, "payment");
      };

    }

})();
