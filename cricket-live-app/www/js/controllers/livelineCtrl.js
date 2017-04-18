angular.module('starter')
	
	.controller('livelineCtrl', function($ionicHistory,liveFact){
		var vm = this;
		
		vm.myGoBack = function()
		{
			$ionicHistory.goBack(); 
		}

		vm.getUpdates = function(){
			liveFact.getUpdate().success(function(data){

			}).error(function(data){

			});

			
		}
		
	})