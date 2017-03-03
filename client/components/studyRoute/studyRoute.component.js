(function(){
  angular.module("myApp")
    .component("studyRoute", {
      controller: studyRouteController,
      templateUrl: 'components/studyRoute/studyRoute.html'
    });

  function studyRouteController(Study, User){
    var vm = this;

    vm.$onInit = function getStudies(){
      Study.find({
        filter: {
          where:{
            id: "58b5dfe245a12b76fe60d85b"
            //TODO get id when sent to route
          },
         include: 'researcher'
        }
      }).$promise
        .then(function(response){
        vm.study = response;
       }).catch(function(err){
        console.log(err);
        });
      };

  }

})();
