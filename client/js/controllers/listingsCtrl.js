angular.module('bartrEconomy')
 .controller('ListingsController', ListingsController)

 ListingsController.$inject = ['$stateParams', '$state', 'ListingFactory']

 function ListingsController(#stateParams, $state, ListingsFactory){
   var vm = this

   ListingFactory.show($stateParams.id)
    .success(function(listings){
      vm.listings = listings
    })

    vm.createListing = function(){
      ListingFactory.create(vm.listing)
      .success(function(data){
        $state.go('listing')
      })
    }

    vm.destroyListing = function(){
      ListingFactory.create(vm.listing)
       .success(function(data){
         $state.go('listing')
       })
    }
 }
