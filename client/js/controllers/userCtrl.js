angular.module('bartrEconomy', [])
 .controller('UserController', UserController)

 UserController.$inject = ['$stateParams', '$state', 'UserFactory']

 function UserController($stateParams, $state, UserFactory){
   var vm = this

   UserFactory.show($stateParams.id)
    .success(function(listings){
      vm.user = user
    })

    vm.createUser = function(){
      UserFactory.create(vm.user)
       .success(function(data){
         $state.go('user')
       })
    }

    vm.destroyListing = function(){
      UserFactory.create(vm.user)
       .success(function(data){
         $state.go('user')
       })
     }

     vm.updateUser = function(){
       UserFactory.update(vm.user._id)
       .success(function(data){
         $state.go('user')
       })
     }
 }
