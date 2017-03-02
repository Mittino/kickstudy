(function(){
  angular.module("myApp")
    .component("searchRoute", {
      controller: searchRouteController,
      templateUrl: 'components/searchRoute/searchRoute.html'
    });

  function searchRouteController(Study){
    var vm = this;
    vm.studies = [];

     vm.$onInit = function getStudies(){
       vm.studies = Study.find().$promise
         .then(function(response){
         console.log(response);
         vm.studies = response;
        }).catch(function(err){
         console.log(err);
         });
       };
        //console.log(vm.studies);


  }

})();
