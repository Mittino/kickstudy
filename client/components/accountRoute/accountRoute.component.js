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
        vm.payments = response;
        var payments = response;
      }).catch(function(error){
        console.log(error);
      });
    };

    vm.submitUserForm = function(data){
      User.prototype$updateAttributes(
        {
          id:data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          nickname: data.nickname,
          username: data.username,
          email: data.email,
          password:data.password
        }
      )
      .$promise
      .then(function(response){
        console.log(response);
        Materialize.toast("Your profile has been updated.", 4000);
      }).catch(function(error){
        console.log(error);
        Materialize.toast("There was an error updating your profile. Please try again.", 4000);
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
