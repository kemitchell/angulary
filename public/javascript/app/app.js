window.app = angular.module('angulary',['ngRoute', 'ngSanitize','app-templates', 'restangular']);

app.config(function ($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('#');
});

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
  RestangularProvider.setMethodOverriders(["put", "patch"]);
});

app.config(function($routeProvider){
  $routeProvider.
    when('/about', {
      templateUrl: 'views/about.html',
      controller:  'mainController'
    }).
    otherwise({
      templateUrl: 'views/about.html',
      controller:  'mainController'
    });
});

app.run(function(){

})

