(function(){
  angular.module("myApp")
    .component("newProfileRoute", {
      controller: newProfileRouteController,
      templateUrl: "/components/newProfileRoute/newProfileRoute.html"
    });

  function newProfileRouteController(User, $state){
    var vm = this;

    vm.submitUserForm = function(data){
      User.create(data).$promise
      .then(function(response){
        // console.log(response);
        $state.go('login');
      }).catch(function(err){
        console.log(err);
      });
    };

  }

})();
