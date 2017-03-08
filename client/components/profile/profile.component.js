(function(){
  angular.module("myApp")
    .component("profile", {
      controller: profileController,
      templateUrl: '/components/profile/profile.html',
      bindings: {
        user: '<',
        submitUserData: '&'
      }
    });

    function profileController(User, $state){
      var vm = this;


      vm.$onChanges = function(){
        vm.userForm = angular.copy(vm.user);
      };

      // vm.submitUserForm = function(){
        // User.create(vm.userForm).$promise
        // .then(function(response){
        //   console.log(response);
        //   $state.go('login');
        // }).catch(function(err){
        //   console.log(err);
        // });
      // };
      vm.submitUserForm = function(){
        vm.submitUserData({data:vm.userForm});
      };

   }

})();
