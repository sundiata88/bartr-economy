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
      url: '/listing/edit',
      templateUrl: 'templates/edit.html',
      controller: 'EditListingController as elc'
    })
    .state('replies', {
      url: '/listing/replies',
      templateUrl: 'templates/replies.html',
      controller: 'RepliesListingController as rlc'
    })
    ///messaging state??????????????
    // .state('cars', {
    //   url: '/cars',
    //   templateUrl: 'templates/cars.html',
    //   controller: 'CarsController as cc'
    // })
    // .state('car', {
    //   url: '/cars/:id',
    //   templateUrl: 'templates/car.html',
    //   controller: 'SingleCarController as scc'
    // })

}


function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
