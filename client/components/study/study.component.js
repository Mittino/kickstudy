(function(){
  angular.module("myApp")
    .component("study",{
      controller: studyController,
      templateUrl: 'components/study/study.html',
      bindings: {
        study: '<',
        handleStudyClick: '&'
      }
    });

  function studyController(){
    var vm = this;

    vm.clickedStudy = function(study){
      vm.handleStudyClick({studyid: study.id});
    };

  }

})();
