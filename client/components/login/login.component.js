(function(){
  angular.module("myApp")
    .component("login", {
      controller: loginController,
      templateUrl: "components/login/login.html",
    });

    function loginController(User, $scope, $state, LoopBackAuth){
      var vm = this;
      vm.loginForm = {};

      vm.loginSubmit = function(){

        vm.submit = User.login({
          email: vm.loginForm.email,
          password: vm.loginForm.password
        }).$promise
        .then(function(response){
          // console.log(response);
          LoopBackAuth.currentUserData = response;
          $state.go('searchRoute');
        }).catch(function(error){
          console.log(error);

        });
      };


  }

})();
