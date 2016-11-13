angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', config]);

function config($stateProvider, $urlRouterProvider, $ionicConfigProvider){

  //platform configurations
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.views.forwardCache(true);


  // Routes configurations
  $stateProvider.state('home', {
    url : '/',
    templateUrl : 'app/home/home.html'
  })

  .state('scholars', {
    url: '/scholars',
    templateUrl: 'app/scholars/scholars.html',
    controller : 'scholars'
  });

  $urlRouterProvider.otherwise("/");

}
