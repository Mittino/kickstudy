(function(){
  angular.module("myApp")
    .component("login", {
      controller: loginController,
      templateUrl: "components/login/login.html",
      bindings:{
        login: '<'
      }
    });

    function loginController(User){
      var vm = this;

      vm.$onChanges = function(){
        console.log(vm.login);
      };


    }



})();
