angular.module('starter').factory('liveFact', function($http){
	var fact = {};

	fact.getUpdate = function(){
		var req = {
			method: 'GET',
			url: 'http://192.168.1.10:3002/api/latest_update',
			headers: {
				'Content-Type': 'application/json',
				"Accept": 'application/vnd.cricket.v1'
			}
		};
		return $http(req)
	};
	return fact;
});