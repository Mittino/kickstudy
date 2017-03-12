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

      // Customer.create({name: 'John Smith'}, function(err, customer) {
      //    console.log('Customer:', customer);
      //    customer.address.create(address, function(err, address) {
      //      console.log('Address:', address);
      //      console.log('Customer with address:', customer);
      //    });
      //  });
      Study.create(data).$promise
        .then(function(study) {
          console.log(study);

          Study.headerImage.create({ id: study.id }, newImage, function (err, image){
            console.log(image);
            console.log(study);
          });
        });

      // Study.create(data, function(err, study){
      //   console.log(err);
      //   console.log(study.prototype);
      //   study.image.create(newImage, function (err, image){
      //     console.log(image);
      //     console.log(study);
      //   });
      // });
        //
        //   study.image.create(newImage).$promise
        //   .then(function(){
        //     console.log(response);
        //   }).catch(function(err){
        //     console.log(err);
        //   });
        //
        // }).catch(function(err){
        //   console.log(err);
        // });

      // Study.create(data).$promise
      // .then(function(response){
      //   console.log(response);
      //   var newStudy = response;
      //   //add image to new study
      //   newImage.studyid = response.id;
      //   newImage.cloudinary = cloudinary;
      //
      //
      //   Image.create(newImage).$promise
      //   .then(function(response){
      //     newStudy.imageid = response.id;
      //
      //     Study.prototype$updateAttributes(newStudy).$promise
      //     .then(function(response){
      //       console.log(response);
      //     }).catch(function(err){
      //       console.log(err);
      //     });
      //
      //     console.log(response);
      //   }).catch(function(err){
      //     console.log(err);
      //   });
      //
      //   $state.go('searchRoute');
      // }).catch(function(err){
      //   console.log(err);
      // });
    };

  }

})();
