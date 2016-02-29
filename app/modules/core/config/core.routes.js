(function () {
  'use strict';
  angular
    .module('hash.core')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        // .state('app', {
        //   abstract: true,
        //   url: '/app',
        //   templateUrl: 'modules/core/views/app.html',
        //   controller: 'MainCtrl'
        // })
        .state('home', {
          url: '',
          templateUrl: 'app/modules/core/views/home.html',
        });
        // .state('router', {
        //   url: '/router',
        //   template: '<div class="lockscreen" style="height: 100%"></div>',
        //   controller: 'RouteCtrl'
        // })
        // .state('error', {
        //   url: '/error',
        //   template: '<div class="text-center alert alert-danger" style="margin: 100px">An error occurred.</div>'
        // });
      $urlRouterProvider.otherwise('/router');
    });

})();
