(function(){
console.log('application component')
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"/components/application/application.html"


    });

    function applicationController(){
      var vm = this;
      console.log("hi");

      vm.$onInit = function onInit(){
        console.log("hi2");
      };

      vm.showLogin = function(){
        vm.login = !vm.login;
        console.log(vm.login, "login");
      };


    }
})();
