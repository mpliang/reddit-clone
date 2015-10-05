'use strict';

angular.module('reddit')
  .controller('IndexCtrl', function ($scope, $window, constants) {
    var fbUrl = constants.firebaseUrl;
    var ref = new $window.Firebase(fbUrl);

    ref.on("value", function (snapshot) {
      console.log(snapshot.val().posts);
      $scope.posts = snapshot.val().posts;
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  });
