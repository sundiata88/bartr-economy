angular.module('bartrEconomy', [])
 .controller('MainController', MainController)

 MainController.$inject = ['$rootScope', '$state']

 function MainController($rootScope, $state){
   var vm = this
   $rootScope.$on('$stateChangesStart', function(){
     vm.$state = $state
   })

   vm.clearFilter = function(){
     vm.listingFilter = ''
   }
 }
