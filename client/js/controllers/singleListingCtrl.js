angular.module('bartrEconomy')
  .controller('SingleListingController', SingleListingController)

  SingleListingController.$inject = ['$stateParams', '$state', 'ListingFactory']

  function SingleListingController($stateParams, $state, ListingFactory){
    var vm = this

    ListingFactory.show($stateParams.id)
     .success(function(listing){
       vm.listing = listing
     })

     vm.destroyListing = function(){
       ListingFactory.destroy(vm.listing._id)
        .success(function(data){
          $state.go('listing')
        })
     }

     vm.createListing = function(){
       ListingFactory.create(vm.listing)
        .success(function(data){
          $state.go('listing')
        })
     }
  }
