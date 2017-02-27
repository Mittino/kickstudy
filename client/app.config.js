(function(){
  angular.module("myApp").config(config);

  config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

  function config($locationProvider, $urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/home');
  // $locationProvider.html5Mode(true);
  console.log("config")
    $stateProvider
    .state({
      name:'application',
      component:'application',
      abstract: true,
    }).state({
      name:'homeRoute',
      url:'/home',
      component:'homeRoute',
      parent:'application'
    });
console.log("config 2")
  }
})();
