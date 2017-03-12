(function(){
  angular.module("myApp")
    .component("studyDetail", {
      controller: studyDetailController,
      templateUrl: 'components/studyDetail/studyDetail.html',
      bindings: {
        studyInfo: '<'
      }
    });

  function studyDetailController(Comment, User, LoopBackAuth){
    var vm = this;
    console.log(vm);

    vm.$onChanges = function(){
      vm.study = angular.copy(vm.studyInfo);
    };

    vm.getComments = function(){
      vm.showPaymentForm = false;
      vm.showComments = !vm.showComments;
      Comment.find({
        filter: {
          include: 'user',
          where: {
            studyid: vm.id
          },
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
        vm.userid = User.getCurrentId();
        vm.current = User.getCurrent();

        vm.newComment.userid = vm.userid;
        vm.newComment.studyid = this.study[0].id;
        vm.newComment.date = moment();

        Comment.create(vm.newComment).$promise
        .then(function(response){
          console.log(response);
          response.user={};
          response.user.nickname = vm.current.nickname;
          vm.comments.push(response);
        }).catch(function(err){
          console.log(err);
        });
      };

      vm.deleteComment = function(data){
        
        Comment.deleteById({
          id: data.id
        }).$promise
          .then(function(response){
          vm.index = _.findIndex(vm.comments, {id: data.id});
          vm.removed = _.pullAt(vm.comments, vm.index);
          console.log(vm.comments);
         })
         .catch(function(err){
          console.log(err);
        });
      };

  }

})();
