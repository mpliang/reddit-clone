'use strict';

angular.module('reddit', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {url: '/', templateUrl: 'src/views/general/index.html', controller: 'IndexCtrl'})

  $urlRouterProvider.otherwise('/');
});