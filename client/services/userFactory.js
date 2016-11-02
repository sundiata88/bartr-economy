angular.module('bartrEconomy')
 .factory('UserFactory', ['$http', UserFactory])

 function UserFactory($http){
   return {
     create: create,
     show: show,
     update: update,
     destroy: destroy,
     createListing: createListing
   }

   function create(id){
     return $http.post('/api/user')
   }

   function show(id){
     return $http.get('/api/user/' + id)
   }

   function update(id){
     return $http.update('/api/user/' + id)
   }

   function destroy(id){
     return $http.delete('/api/user/' + id)
   }

   function createListing(id){
     return $http.post('api/user/listing' + id)
   }
 }
