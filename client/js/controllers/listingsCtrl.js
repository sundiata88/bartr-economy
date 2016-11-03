angular.module('bartrEconomy')
 .controller('ListingsController', ListingsController)

 ListingsController.$inject = ['$scope', '$state', 'ListingFactory']

 function ListingsController($scope, $state, ListingFactory){
   var vm = this

   ListingFactory.index()
    .success(function(listings) {
    vm.listings = listings
  })

    ListingFactory.show($scope.id)
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
      ListingFactory.destroy(vm.listing)
       .success(function(data){
         $state.go('listing')
       })
    }
 }
