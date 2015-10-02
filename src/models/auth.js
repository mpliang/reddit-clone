'use strict';

angular.module('reddit')
.service('Auth', function(constants, $window, $firebaseAuth){
  var fbUrl = constants.firebaseUrl;
  var ref = new $window.Firebase(fbUrl);
  var auth = $firebaseAuth(ref);

  this.createUser = function(user) {
    return auth.$createUser({
      email: user.email,
      password: user.password1
    });
  };
});
