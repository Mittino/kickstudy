(function(){
  angular.module("myApp")
    .config(config);

  config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

  function config($locationProvider, $urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/home');
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
      });

  }
})();
