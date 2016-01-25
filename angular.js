angular.module("mainModule", [])
angular.module("mainModule").controller("mainTroller", ["$scope", function($scope){

$scope.clickr = function(){
	console.log("Works!");
	$scope.hideName = true
	$scope.showBox = true
}
$scope.introClickr = function(){
	$scope.introHide = true;
	$scope.showIntro = true
}
$scope.aboutClickr = function(){
	$scope.aboutHide = true;
	$scope.showAbout = true;
}
	
}])