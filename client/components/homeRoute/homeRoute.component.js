(function(){

  angular.module("myApp")
  .component("homeRoute", {
    controller: homeRouteController,
    templateUrl: '/components/homeRoute/homeRoute.html'
  });

  function homeRouteController(Study){
   var vm = this;
   console.log('homeRouteController');
   vm.studies;

   vm.$onInit = function getStudies(){
     vm.studies = Study.get().$promise
       .then(function(response){
       console.log(response);
       vm.studies = response;
      }).catch(function(err){
       console.log(err);
       });
     };
      console.log(vm.studies);

  // vm.test = $resource(Study.get(),
  //           { method: 'getTask', q: '*' }, // Query parameters
  //           {'query': { method: 'GET' }}
  //         );
  //       }
  //   console.log(vm.test);
  // }


  
  }
})();
