(function(){
  angular.module("myApp")
    .component("editProfileRoute", {
      controller: editProfileRouteController,
      templateUrl: "/components/editProfileRoute/editProfileRoute.html"
    });

  function editProfileRouteController(User){
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
      User.patchOrCreate({
        filter:{
          where: {
            id: data.id
          }
        }
      })
      .$promise
      .then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    };

  }

})();
