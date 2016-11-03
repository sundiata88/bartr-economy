angular.module('bartrEconomy')
 .controller('EditListingController', EditListingController)

 EditListingController.$inject = ['$stateParams', '$state', 'ListingFactory']

 function EditListingController($stateParams, $state, ListingFactory) {
   var vm = this

   ListingFactory.show($stateParams.id)
    .success(function(listing){
      vm.listing = listing
    })

    ListingFactory.show($stateParams.id)
          .success(function(listing){
            vm.listing = listing
           //console.log(vm.car)qqq
          })

          vm.destroyListing = function(){
            ListingFactory.destroy(vm.listing._id)
            .success(function(data){
              $state.go('listing')
            })

            vm.updateListing = function(){
              ListingFactory.update(vm.listing._id)
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
      }
