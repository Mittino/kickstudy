(function(){
console.log('application component')
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"/components/application/application.html"


    });

    function applicationController($state){
      var vm = this;
      console.log("hi");

      vm.$onInit = function onInit(){
        console.log("hi2");
      };

      vm.login = function(){
        console.log("clicked");
         $state.go('login');
      };


    }
})();
