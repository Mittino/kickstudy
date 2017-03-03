(function(){
  angular.module("myApp")
    .component("editProfileRoute", {
      controller: editProfileRouteController,
      templateUrl: "/components/editProfileRoute/editProfileRoute.html"
    });

  function editProfileRouteController(User, $state){
    var vm = this;

    User.getCurrent().$promise
      .then(function(response){
        vm.user = response;
        console.log(vm.user);
      }).catch(function(err){
        console.log(err);
      });

    vm.submitUserForm = function(data){
      console.log(data.id);
      User.prototype$updateAttributes(
        {
          id:data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          nickname: data.nickname,
          username: data.username,
          email: data.email,
          password:data.password
        }
      )
      .$promise
      .then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
        $state.go('homeRoute');
      });
    };

  }

})();
