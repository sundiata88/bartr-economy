angular.module('bartrEconomy')
 .factory('ListingFactory', ['$http', ListingFactory])

 function ListingFactory($http){
   return {
     index: index,
     show: show,
     create: create,
     update: update,
     destroy: destroy
   }

   function index(){
     return $http.get('/api/listings')
   }

   function show(id){
     return $http.get('/api/listing/' + id)
   }

   function create(id){
     return $http.post('/api/listing' + id)
   }

   function update(id){
     return $http.update('/api/')
   }

   function destroy(id){
     return $http.delete('/api/listing/' + id)
   }
 }
