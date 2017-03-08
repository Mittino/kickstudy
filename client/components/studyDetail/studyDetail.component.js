(function(){
  angular.module("myApp")
    .component("studyDetail", {
      controller: studyDetailController,
      templateUrl: 'components/studyDetail/studyDetail.html',
      bindings: {
        studyInfo: '<'
      }
    });

  function studyDetailController(Comment, User){
    var vm = this;
    console.log(this);

    vm.$onChanges = function(){
      vm.study = angular.copy(vm.studyInfo);
      console.log(vm.study);
    };

    vm.getComments = function(){
      vm.showComments = !vm.showComments;
      Comment.find({
        filter: {
          where: {
            studyid: vm.id
          },
         include: 'user',
        }
      }).$promise
        .then(function(response){
        vm.comments = response;
        console.log(vm.comments);
       }).catch(function(err){
        console.log(err);
        });
      };

      vm.postComment = function(){
        vm.newComment.userid = User.getCurrentId();
        vm.newComment.studyid = this.study[0].id;
        vm.newComment.date = new Date().getSeconds();
        console.log(vm.newComment);

        Comment.create(vm.newComment).$promise
        .then(function(response){
          console.log(response);
        }).catch(function(err){
          console.log(err);
        });
      };


  }

})();
