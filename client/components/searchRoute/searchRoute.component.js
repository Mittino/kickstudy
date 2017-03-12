(function(){
  angular.module("myApp")
    .component("searchRoute", {
      controller: searchRouteController,
      templateUrl: 'components/searchRoute/searchRoute.html'
    });

  function searchRouteController(Study, $state){
    var vm = this;
    vm.studies = [];

     vm.$onInit = function getStudies(){
       Study.find({
         filter: {
          include: ['headerImage', 'researcher']
         }
       }).$promise
         .then(function(response){
         vm.studies = response;
        console.log(vm.studies);
        }).catch(function(err){
         console.log(err);
         });
       };

       vm.clickedStudy = function(studyid){
         $state.go('studyRoute', {id: studyid});
       };

       vm.createNewStudy = function(){
         $state.go('createStudyRoute');
       };

  }

})();
