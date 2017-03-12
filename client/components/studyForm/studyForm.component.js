(function(){
  angular.module("myApp")
    .component("studyForm", {
      controller: studyFormController,
      templateUrl: 'components/studyForm/studyForm.html',
      bindings: {
        createStudy: '&',
        newImage: '&'
      }
    });

  function studyFormController(User, cloudinary, Upload, Study){
    var vm = this;
    vm.id = User.getCurrentId();

    vm.studyForm = {researcherid: vm.id};

    vm.submitStudyForm = function(){
      vm.createStudy({data:vm.studyForm});
    };

    vm.uploadImage = function(file){
      //console.log(file);

      // if (!$scope.files) return;
      // angular.forEach(files, function(file){
        if (file && !file.$error) {
          var upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: 'myphotoalbum',
              context: 'photo=' + file.name,
              file: file
            }
          }).progress(function (e) {
            file.progress = Math.round((e.loaded * 100.0) / e.total);
            file.status = "Uploading... " + file.progress + "%";
          }).success(function (data, status, headers, config) {
            vm.image = data;
            vm.newImage({data:vm.image});
            //console.log(data);
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
    };


  }

})();
