(function(){
  angular.module("myApp")
    .config(httpInterceptorConfig)
    .config(routerConfig);

  function httpInterceptorConfig($httpProvider) {
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if (rejection.status == 401) {
          // Clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });
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
      })
      .state('login', {
        url:'/login',
        component:'login',
        parent:'application'
      })
      .state('editProfileRoute', {
        url:'/editProfile',
        component:'editProfileRoute',
        parent:'application'
      })
      .state('newProfileRoute', {
        url:'/newProfile',
        component:'newProfileRoute',
        parent:'application'
      })
      .state('searchRoute', {
        url:'/search',
        component:'searchRoute',
        parent:'application'
      })
      .state('studyRoute', {
        url:'/study/:id',
        component:'studyRoute',
        parent:'application'
      })
      .state('createStudyRoute', {
        url:'/createStudy',
        component:'createStudyRoute',
        parent:'application'
      });

  }
})();
