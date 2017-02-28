(function(){
  angular.module("myApp")
    .component('landingRoute', {
      controller: landingRouteController,
      templateUrl: '/components/landingRoute/landingRoute.html'
    });

  function landingRouteController(){
    var vm = this;
  }
  
})();
