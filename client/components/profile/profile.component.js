(function(){
  angular.module("myApp")
    .component("profile", {
      controller: profileController,
      templateUrl: '/components/profile/profile.html'
    });

    function profileController(User, $state){
      var vm = this;
      vm.userForm = {};

      vm.submitUserForm = function(){
        User.create(vm.userForm).$promise
        .then(function(response){
          console.log(response);
          $state.go('login');
        }).catch(function(err){
          console.log(err);
        });
      };

    }

})();
