(function(){
  angular.module("myApp")
    .component("createStudyRoute",{
      controller: createStudyRouteController,
      templateUrl: 'components/createStudyRoute/createStudyRoute.html'
    });

  function createStudyRouteController(Study, $state){
    var vm = this;

    vm.createStudy = function(data){
      Study.create(data).$promise
      .then(function(response){
        // console.log(response);
        $state.go('searchRoute')
      }).catch(function(err){
        console.log(err);
      });
    };


  }

})();
