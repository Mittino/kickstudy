(function(){

  angular.module("myApp")
  .component("homeRoute", {
    controller: homeRouteController,
    templateUrl: '/components/homeRoute/homeRoute.html'
  });

  function homeRouteController(Study){
   var vm = this;
   console.log('homeRouteController');

   vm.$onInit = function getStudies(){
     vm.studies = Study.find().$promise
       .then(function(response){
       console.log(response);
       vm.studies = response;
      }).catch(function(err){
       console.log(err);
       });
     };
      console.log(vm.studies);




  }
})();
