(function(){
  angular.module("myApp")
    .config(httpInterceptorConfig)
    .config(routerConfig);

  function httpInterceptorConfig($httpProvider) {
    // TODO: Interceptor goes here...
  }

  routerConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

  function routerConfig($locationProvider, $urlRouterProvider, $stateProvider){
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
