'use strict';

angular.module('reddit')
.controller('UsersCtrl', function($scope, $state, Auth){
  $scope.state = $state.current.name.split('.')[1].toUpperCase();

  $scope.submit = function(user) {
    if($scope.state === 'REGISTER') {
      if(user.password1 !== user.password2){
        $scope.user = {};
        $scope.user.email = user.email;
        alert("Passwords do not match.")
      } else {
        Auth.createUser(user)
        .then(function(userData){
          $state.go('users.login');
        }).catch(function(err) {
          $scope.user = {};
          alert(err);
        });

      }
    } else {
      // login stuff
    }
  };
});
