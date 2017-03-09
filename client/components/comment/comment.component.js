(function(){
  angular.module("myApp")
    .component("comment", {
      controller: commentController,
      templateUrl: 'components/comment/comment.html',
      bindings: {
        comment: '<',
        editComment: '&',
        deleteComment: '&'
      }
    });

  function commentController(User){
    var vm = this;
    vm.userid = User.getCurrentId();

    vm.$onInit = function(){
      if (vm.userid === this.userid){
        vm.isOwner = true;
      }
    };

    vm.edit = function(){
      vm.editComment()
    };

    vm.delete = function(){
      console.log(vm.comment);
      vm.deleteComment({data:vm.comment});
    };


  }

})();
