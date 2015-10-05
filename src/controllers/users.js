'use strict';

angular.module('reddit')
.controller('UsersCtrl', function($scope, $state){
  $scope.state = $state.current.name.split('.')[1].toUpperCase();

  // $scope.submit = function(user) {
  //   if($scope.state === 'REGISTER') {
  //     if(user.password1 !== user.password2){
  //       $scope.user = {};
  //       $scope.user.email = user.email;
  //       $window.swal({
  //         title: "Oh no!",
  //         text: "Passwords do not match.",
  //         type: 'error'
  //       });
  //     } else {
  //       Auth.createUser(user)
  //       .then(function(userData){
  //         $state.go('users.login');
  //       }).catch(function(err) {
  //         $scope.user = {};
  //         $window.swal({
  //           title: "Oh no!",
  //           text: err,
  //           type: 'error',
  //           animation: "slide-from-top"
  //         });
  //       });
  //     }
  //   } else {
  //     Auth.login(user)
  //     .then(function(userData){
  //       $state.go('index');
  //     })
  //     .catch(function(err) {
  //       console.error(err);
  //     });
  //   }
  // };
});
