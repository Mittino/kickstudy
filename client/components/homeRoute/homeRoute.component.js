(function(){

  angular.module("myApp")
  .component("homeRoute", {
    controller: homeRouteController,
    templateUrl: '/components/homeRoute/homeRoute.html'
  });

function homeRouteController(){
 var vm = this;
 console.log('homeRouteController');
}

})();
