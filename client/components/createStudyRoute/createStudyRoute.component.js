(function(){
  angular.module("myApp")
    .component("createStudyRoute",{
      controller: createStudyRouteController,
      templateUrl: 'components/createStudyRoute/createStudyRoute.html'
    });

  function createStudyRouteController(Study){
    var vm = this;

    vm.createStudy = function(data){
      Study.create(data).$promise
      .then(function(response){
        console.log(response);
      }).catch(function(err){
        console.log(err);
      });
    };


  }

})();
