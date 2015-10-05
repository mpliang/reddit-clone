'use strict';

angular.module('reddit')
  .directive('mikesLogin', function () {
    return {
      // restrict: 'E',
      // scope: {
      //   state: '@'
      // },
      templateUrl: 'src/directives/templates/login.html',
      controller: function ($scope, $state, constants, $window, $firebaseAuth) {
        console.log($scope.state = $state.current.name.split('.')[1].toUpperCase());
        console.log($scope.state);
        $scope.submit = function (user) {
          if ($scope.state === 'REGISTER') {
            if (user.password1 !== user.password2) {
              $scope.user = {};
              $scope.user.email = user.email;
              $window.swal({
                title: "Oh no!",
                text: "Passwords do not match.",
                type: 'error'
              });
            } else {
              createUser(user)
                .then(function (userData) {
                  $state.go('users.login');
                }).catch(function (err) {
                  $scope.user = {};
                  $window.swal({
                    title: "Oh no!",
                    text: err,
                    type: 'error',
                    animation: "slide-from-top"
                  });
                });
            }
          } else {
            login(user)
              .then(function (userData) {
                $state.go('index');
              })
              .catch(function (err) {
                console.error(err);
              });
          }
        };
        //rows to be filters/searched
        var fbUrl = constants.firebaseUrl;
        var ref = new $window.Firebase(fbUrl);
        var auth = $firebaseAuth(ref);
        this.auth = auth;

        auth.$onAuth(authData => {
          this.user = authData;
          if (authData) {
            // console.log("Authenticated with uid:", authData.uid);
            console.log("Client authenticated.");
          } else {
            console.log("Client unauthenticated.")
          }
        });

        function createUser(user) {
          return auth.$createUser({
            email: user.email,
            password: user.password1
          });
        };

        function login(user, cb) {
          return auth.$authWithPassword({
            email: user.email,
            password: user.password1
          });
        };

        function logout() {
          auth.$unauth();
        };
      }
    }
  })
