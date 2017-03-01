(function(){
  angular.module("myApp")
    .component("home", {
      controller: homeController,
      templateUrl: '/components/home/home.html'
    });



    function homeController(){
      var vm = this;
      console.log("home");


    }

})();
