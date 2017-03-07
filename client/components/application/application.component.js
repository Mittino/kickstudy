(function(){
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"/components/application/application.html"


    });

    function applicationController($state, User){
      var vm = this;
      vm.User = User;

    // vm.$onInit = function() {
    //   vm.status = User.isAuthenticated();
    //   console.log(vm.status);
    // };
      vm.login = function(){
         $state.go('login');
      };

      vm.createAccount = function(){
        $state.go('newProfileRoute');
      };

      vm.search = function(){
        $state.go('searchRoute');
      };

      vm.logout = function(){
        User.logout();
        $state.go('landingRoute');
      };

      vm.home = function(){
        $state.go('homeRoute');
      };

      vm.editProfile = function(){
        $state.go('editProfileRoute');
      };


    }
})();
