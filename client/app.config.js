(function(){
  angular.module("myApp")
    .config(config);

  config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

  function config($locationProvider, $urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/kickstudy');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('application', {
        component:'application',
        abstract: true,
      })
      .state('homeRoute', {
        url:'/home',
        component:'homeRoute',
        parent:'application'
      })
      .state('landingRoute', {
        url:'/kickstudy',
        component:'landingRoute',
        parent:'application'
      });

  }
})();
