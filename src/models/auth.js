'use strict';

angular.module('reddit')
.service('Auth', function(constants, $window, $firebaseAuth){
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

  this.createUser = function(user) {
    return auth.$createUser({
      email: user.email,
      password: user.password1
    });
  };

  this.login = function(user, cb) {
    return auth.$authWithPassword({
      email: user.email,
      password: user.password1
    });
  };

  this.logout = function() {
    auth.$unauth();
  };

});
