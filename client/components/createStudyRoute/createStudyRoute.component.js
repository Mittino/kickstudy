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
    };

    vm.createStudy = function(data){
      console.log(data);

      Study.create(data).$promise
      .then(function(response){
        console.log(response);
        var newStudy = response;
        //add image to new study
        newImage.studyid = response.id;
        newImage.cloudinary = cloudinary;


        Image.create(newImage).$promise
        .then(function(response){
          newStudy.imageid = response.id;

          Study.prototype$updateAttributes(newStudy).$promise
          .then(function(response){
            console.log(response);
          }).catch(function(err){
            console.log(err);
          });

          console.log(response);
        }).catch(function(err){
          console.log(err);
        });

        $state.go('searchRoute');
      }).catch(function(err){
        console.log(err);
      });
    };

  }

})();
