(function(){
  angular.module("myApp")
    .component("createStudyRoute",{
      controller: createStudyRouteController,
      templateUrl: 'components/createStudyRoute/createStudyRoute.html'
    });

  function createStudyRouteController(Study, $state, Image){
    var vm = this;
    //var cloudinary = {};
    var newImage = {};

    vm.newImage = function(data){
      newImage.cloudinary = data;
    };

    vm.createStudy = function(data){
      console.log(data);

      Study.create(data).$promise
        .then(function(study) {
          console.log(study);

          Study.headerImage.create({ id: study.id }, newImage, function (err, image){
            console.log(image);
            console.log(study);
          });
          $state.go('searchRoute');
        }).catch(function(err){
          console.log(err);
        });

    };

  }

})();
