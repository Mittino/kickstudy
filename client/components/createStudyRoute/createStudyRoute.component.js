(function(){
  angular.module("myApp")
    .component("createStudyRoute",{
      controller: createStudyRouteController,
      templateUrl: 'components/createStudyRoute/createStudyRoute.html'
    });

  function createStudyRouteController(Study, $state, Image){
    var vm = this;
    var cloudinary = {};
    var newImage = {};

    vm.newImage = function(data){
      cloudinary = data;
      console.log(cloudinary);
    };

    vm.createStudy = function(data){

      Study.create(data).$promise
      .then(function(response){
        console.log(response);

        //add image to new study
        newImage.studyid = response.id;
        newImage.cloudinary = cloudinary;
        console.log(newImage);

        Image.create(newImage).$promise
        .then(function(response){
          console.log(response);
        }).catch(function(err){
          console.log(err);
        });

        $state.go('searchRoute');
      }).catch(function(err){
        console.log(err);
      });
    };


    // Study.images.create(data).$promise
    // .then(function(response){
    //   console.log("created image in db", response);
    // }).catch(function(err){
    //   console.log("error saving image to db", err);
    // });
  }

})();
