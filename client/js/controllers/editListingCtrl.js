angular.module('bartrEconomy')
 .controller('EditListingController', EditListingController)

 EditListingController.$inject = ['$stateParams', '$state', 'ListingFactory']

 function EditListingController($stateParams, $state, ListingFactory) {
   var vm = this

   ListingFactory.show($stateParams.id)
    .success(function(listing){
      vm.listing = listing
    })

    
 }
