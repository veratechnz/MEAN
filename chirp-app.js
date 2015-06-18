//Our Controller

var app = angular.module('chirpApp', []);

//Scope links our controller to our view. 
//The scope contains all of your models. 
app.controller('mainController', function($scope){

//These are scope variables that will be patched as models onto the view
	$scope.posts = [];
	$scope.newPost = {create_by: '', text: '', create_at: ''};

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		//Here we are reseting newPost as per line 11
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};


});


// The auth or register controller
app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		//Placeholder until authentication is implemented
		$scope.error_message = 'Login request for ' + $scope.user.username;
	};

	$scope.register = function(){
		//Placeholder until authentication is implemented.
		$scope.error_message = 'Registration request for ' + $scope.user.username;
	};

});





// https://www.youtube.com/watch?v=Jh0er2pRcq8 109.10

// https://github.com/microsoftlearning/chirp/tree/master