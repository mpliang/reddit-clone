'use strict';

angular.module('reddit')
.controller('IndexCtrl', function($scope) { 
  console.log('indexCtrl');

  var post = {
    title: 'Hello world',
    author: 'Cade',
    subreddit: 'general',
    createdAt: Date.now(),
    score: 1,
    content: 'https://myavantiservices.files.wordpress.com/2015/02/helloworld.gif',
    comments: []
  };

  $scope.posts = [post, post, post];

});

