(function(){

  angular.module("myApp")
  .component("homeRoute", {
    controller: homeRouteController,
    templateUrl: '/components/homeRoute/homeRoute.html'
  });

  function homeRouteController(Study, User, Payment){
   var vm = this;
   console.log('homeRouteController');

   vm.$onInit = function getFundedStudies(){
     vm.id = User.getCurrentId();
     console.log(vm.id, "id");

    //  User.find({
    //    fileter: {
    //      where: {
    //        userId: vm.id
    //      }
    //    }
    //  })
    //  .$promise
    //  .then(function(response){
    //    console.log(response);
    //  }).catch(function(error){
    //    console.log(error);
    //  });
     //console.log(vm.nickname);

     Payment.find({
       filter: {
         where: {
           funderid: vm.id
         },
         include: 'study'
        }
      })
      .$promise
      .then(function(response){
        console.log(response);
        vm.payments = response;
        var payments = response;
      }).catch(function(error){
        console.log(error);
      });
    };




  //  vm.$onInit = function getStudies(){
  //    vm.studies = Study.find().$promise
  //      .then(function(response){
  //      console.log(response);
  //      vm.studies = response;
  //     }).catch(function(err){
  //      console.log(err);
  //      });
  //    };
  //     console.log(vm.studies);




  }
})();
