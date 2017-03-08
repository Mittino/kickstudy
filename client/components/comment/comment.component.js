(function(){
  angular.module("myApp")
    .component("comment", {
      controller: commentController,
      templateUrl: 'components/comment/comment.html',
      bindings: {
        comment: '<'
      }
    });

  function commentController(){
    var vm = this;


  }

})();
