'use strict';

angular.module('reddit')
.controller('PostCtrl', function($scope, $state, Auth, $window, constants){
  var fbUrl = constants.firebaseUrl;
  var ref = new $window.Firebase(fbUrl);

  Auth.auth.$onAuth(function(authData){
    $scope.auth = authData;
  });

  $scope.newPost = function(post){
    Auth.auth.$onAuth(function(authData){
      console.log(authData.uid);
      post['userId'] = authData.uid;
    });
    if (!post.content) {
      post['content'] = 'https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif';
    }
    if (!post.subreddit) {
      post['subreddit'] = 'general';
    }
    post['author'] = 'Mike';
    post['createdAt'] = new Date();
    post['score'] = 1;
    post['comments'] = [];
    ref.child('posts').push(post);
    $state.go('index');
  };

})
