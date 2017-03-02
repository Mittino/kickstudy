(function(){
console.log('application component')
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"/components/application/application.html"


    });

    function applicationController($state){
      var vm = this;
      vm.loginStatus = null;

      vm.login = function(){
        console.log("clicked");
         $state.go('login');
      };

      vm.createAccount = function(){
        $state.go('profile');
      }

      vm.loggedIn = function(){
        vm.loginStatus = !vm.loginStatus;
      };

      vm.search = function(){
        $state.go('searchRoute');
      }


    }
})();
