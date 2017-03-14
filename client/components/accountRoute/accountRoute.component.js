(function(){
  angular.module("myApp")
    .component("accountRoute", {
      controller: accountRouteController,
      templateUrl: 'components/accountRoute/accountRoute.html'
    });

  function accountRouteController(User, Payment){
    var vm = this;
    vm.profile = true;

    vm.$onInit = function getFundedStudies(){
      vm.id = User.getCurrentId();

      User.getCurrent().$promise
       .then(function(response){
         vm.user = response;
         //console.log(response);
       }).catch(function(err){
         console.log(err);
       });

     Payment.find({
       filter: {
         where: {
           funderid: vm.id
         },
         include: 'study'
        }
      }).$promise
      .then(function(response){
        //console.log(response);
        vm.payments = response;
        var payments = response;
      }).catch(function(error){
        console.log(error);
      });
    };
    

    vm.showPayments = function(){
      vm.payment = true;
      vm.profile = false;
    };

    vm.showProfile = function(){
      vm.payment = false;
      vm.profile = true;
    };


  }

})();
