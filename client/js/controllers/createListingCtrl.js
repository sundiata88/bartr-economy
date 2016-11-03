angular.module('bartrEconomy')
 .controller('CreateListingController', CreateListingController)

 CreateListingController.$inject = ['$scope', '$state', 'ListingFactory']

 function CreateListingController($scope, $state, ListingFactory){
   var vm = this

   vm.createListing = function(){
     // TODO: create line
     $http.get('/')
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
