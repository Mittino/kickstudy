(function(){
  angular.module("myApp")
    .component("study",{
      controller: studyController,
      templateUrl: 'components/study/study.html',
      bindings: {
        study: '<'
      }
    });

  function studyController(){
    var vm = this;
    


  }

})();
