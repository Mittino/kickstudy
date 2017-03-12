(function(){
  angular.module('myApp')
  .component('landing', {
    controller: landingController,
    templateUrl: '/components/landing/landing.html',
  });

  function landingController($state){
    var vm = this;
    vm.login = false;

    vm.createAccount = function(){
      $state.go('newProfileRoute');
    };

  }

})();
