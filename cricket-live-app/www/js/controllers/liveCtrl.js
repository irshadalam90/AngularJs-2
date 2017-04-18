angular.module('starter')
	
	.controller('liveCtrl', function($scope,$state){
		var vm = this;
		vm.liveLine = function(){
			$state.go('liveline');
		}
	})