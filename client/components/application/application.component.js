(function(){
console.log('application component')
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
        console.log("clicked");
         $state.go('login');
      };

      vm.createAccount = function(){
        $state.go('profile');
      };

      vm.loggedIn = function(){
        vm.loginStatus = !vm.loginStatus;
      };

      vm.search = function(){
        $state.go('searchRoute');
      };


    }
})();
