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
        console.log(vm.userid);
        vm.newComment.userid = User.getCurrentId();
        vm.newComment.studyid = this.study[0].id;
        vm.newComment.date = moment();

        Comment.create(vm.newComment).$promise
        .then(function(response){
          console.log(response);
          vm.comments.push(response);
        }).catch(function(err){
          console.log(err);
        });
      };

      vm.showPymtForm = function(){
        vm.showComments = false;
        vm.showPaymentForm = !vm.showPaymentForm;
      };

      vm.deleteComment = function(data){
        console.log(data);
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
