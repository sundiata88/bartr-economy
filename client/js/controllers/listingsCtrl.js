angular.module('bartrEconomy')
 .controller('AllListingsController', AllListingsController)

 AllListingsController.$inject = ['$stateParams', '$state', 'ListingFactory']

 function AllListingsController($stateParams, $state, ListingFactory){
   var vm = this
 }

 ListingFactory.index($stateParams.id)
  .success(function(listings){
    vm.listings = listings 
  })
