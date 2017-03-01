(function(){
  angular.module('myApp')
  .component('landing', {
    controller: landingController,
    templateUrl: '/components/landing/landing.html',
  });

  function landingController(){
    var vm = this;
    vm.login = false;






  }

})();
