'use strict';

angular.module('reddit')
.controller('NavCtrl', function($scope, $state, Auth){
  Auth.auth.$onAuth(function(authData){
    $scope.auth = authData;
  });

  $scope.logout = function(){
    Auth.logout();
    $state.go('index');
  };

});