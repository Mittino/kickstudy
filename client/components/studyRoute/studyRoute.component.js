(function(){
  angular.module("myApp")
    .component("studyRoute", {
      controller: studyRouteController,
      templateUrl: 'components/studyRoute/studyRoute.html'
    });

  function studyRouteController(Study, User, $stateParams){
    var vm = this;

    vm.$onInit = function getStudies(){
      Study.findOne({
        filter: {
          where:{
            id: $stateParams.id
          },
         include: ['researcher', 'headerImage', 'comments']
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
