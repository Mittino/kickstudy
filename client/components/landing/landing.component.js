(function(){
  angular.module('myApp')
  .component('landing', {
    controller: landingController,
    templateUrl: '/components/landing/landing.html',
    bindings: {
      login: '<'
    }
  });

  function landingController(){
    var vm = this;
    vm.login = false;

    vm.showLogin = function(){
      vm.login = !vm.login;
      console.log(vm.login, "login");
    };




  }

})();
