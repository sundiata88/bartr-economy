angular.module('bartrEconomy', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])
  .directive('navigationBar', navigationBar)

function router($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the base '/#/' from the url:
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController as loginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'logoutController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerController as registerCtrl'
    })
    .state('listings', {
      url: '/listings',
      templateUrl: 'templates/listings.html',
      controller: 'ListingsController as lc'
    })
    .state('listing', {
      url: '/listings/:id',
      templateUrl: 'templates/listing.html',
      controller: 'SingleListingController as slc'
    })
    .state('newListing', {
      url: '/createlisting',
      templateUrl: 'templates/newlisting.html',
      controller: 'CreateListingController as clc'
    })
    .state('edit', {
      url: '/listing/:id/edit',
      templateUrl: 'templates/edit.html',
      controller: 'EditListingController as elc'
    })
    .state('replies', {
      url: '/listing/replies',
      templateUrl: 'templates/replies.html',
      controller: 'RepliesListingController as rlc'
    })
    ///messaging state??????????????

}


function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
