(function(){
  angular.module("myApp")
    .component("studyForm", {
      controller: studyFormController,
      templateUrl: 'components/studyForm/studyForm.html',
      bindings: {
        createStudy: '&'
      }
    });

  function studyFormController(User){
    var vm = this;
    vm.id = User.getCurrentId();

    var studyForm = {researcherid: vm.id};

    vm.submitStudyForm = function(){
      vm.createStudy({data:vm.studyForm});
      console.log(vm.studyForm);

    };

  }

})();
