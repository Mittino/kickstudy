(function(){
  angular.module("myApp")
    .component("login", {
      controller: loginController,
      templateUrl: "components/login/login.html",
    });

    function loginController(User, $scope, $state){
      var vm = this;
      vm.loginForm = {};



      vm.loginSubmit = function(){

      // vm.submit=User.login($scope.credentials, function() {
      //     var next = $location.nextAfterLogin || '/login';
      //     $location.nextAfterLogin = null;
      //     $location.path(next);
      //   });


        vm.submit = User.login({
          email: vm.loginForm.email,
          password: vm.loginForm.password
        }).$promise
        .then(function(response){
          console.log(response);
          $state.go('homeRoute');
        }).catch(function(error){
          console.log(error);

        });
      };


  }

})();
