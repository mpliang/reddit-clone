'use strict';

angular.module('reddit', ['ui.router', 'firebase', 'angularMoment'])

.constant('constants', {
  firebaseUrl: "https://cades-reddit.firebaseio.com/"
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', { url: '/', templateUrl: 'src/views/general/index.html', controller: 'IndexCtrl' })

  .state('users', { url: '/users', abstract: true, templateUrl: 'src/views/users/users.html' })
  .state('users.login', { url: '/login', templateUrl: 'src/views/users/form.html', controller: 'UsersCtrl' })
  .state('users.register', { url: '/register', templateUrl: 'src/views/users/form.html', controller: 'UsersCtrl' });

  $urlRouterProvider.otherwise('/');
});
