(function(){
  angular.module("myApp")
    .component("studyDetail", {
      controller: studyDetailController,
      templateUrl: 'components/studyDetail/studyDetail.html',
      bindings: {
        studyInfo: '<'
      }
    });

  function studyDetailController(){
    var vm = this;

    vm.$onChanges = function(){
      vm.study = angular.copy(vm.studyInfo);
      console.log(vm.study);
    };

  }

})();
