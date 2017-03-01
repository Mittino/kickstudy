(function(){
  angular.module("myApp")
    .component('landingRoute', {
      controller: landingRouteController,
      templateUrl: '/components/landingRoute/landingRoute.html'
    });

  function landingRouteController(){
    var vm = this;
    vm.login = false;


    vm.showLoginForm = function(){
      vm.login = !vm.login;
      console.log(vm.login, "login");
    };



  }
})();
