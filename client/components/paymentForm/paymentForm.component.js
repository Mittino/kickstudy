(function(){
  angular.module("myApp")
    .component("paymentForm", {
      controller: paymentFormController,
      templateUrl: "components/paymentForm/paymentForm.html"
    }
);

  function paymentFormController(){
    var vm = this;


    vm.paymentSubmit = function(){
      console.log('submit', vm.paymentForm)
    };



  }

})();
