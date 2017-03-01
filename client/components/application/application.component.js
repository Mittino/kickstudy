(function(){
console.log('application component')
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"/components/application/application.html"


    });

    function applicationController($state){
      var vm = this;
      console.log("hi");
      vm.loginStatus = null;

      vm.$onInit = function onInit(){
        console.log("hi2");
      };

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
