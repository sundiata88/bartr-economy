angular.module('bartrEconomy')
 .controller('CreateListingController', CreateListingController)

 CreateListingController.$inject = ['$stateParams', '$state', 'ListingFactory']

 function CreateListingController($stateParams, $state, ListingFactory){
   var vm = this

   ListingFactory.createListing = function(){
     .success(function(listing){
       vm.listing = listing
     })
   }

   vm.destroyListing = function(){
     ListingFactory.destroy(vm.listing._id)
     .success(function(data){
       $state.go('listing')
     })
   }
 }
