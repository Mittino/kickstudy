(function(){
console.log('application component')
  angular.module("myApp")
    .component("application", {
      controller: applicationController,
      templateUrl:"application/application.html"


    });

    function applicationController(){
      var vm = this;
      console.log("hi");

      vm.$onInit = function onInit(){
        console.log("hi2");
      };
    }

})();
