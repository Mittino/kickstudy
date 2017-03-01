(function(){
  angular.module("myApp")
    .component("searchRoute", {
      controller: searchRouteController,
      templateUrl: 'components/searchRoute/searchRoute.html'
    });

  function searchRouteController(){
    var vm = this;
  }

})();
