angular.module('routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/index.html',
      controller: 'HomeController'
    })

  $urlRouterProvider.otherwise('/home');
})
