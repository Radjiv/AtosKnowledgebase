/** * Main AngularJS Web Application */ 
var app = angular.module('myApp', [ 'ngRoute','myApp.service' ]);

/** * Configure the Routes */ app.config(['$routeProvider', function ($routeProvider) { $routeProvider 
// Pages
.when("/home", {templateUrl: "partials/home.html"}) 
.when("/userList", {templateUrl: "partials/userList.html", controller: "ListPageCtrl"}) 
.when("/addUser", {templateUrl: "partials/addUser.html", controller: "AddPageCtrl"}) 
.when("/toDoList", {templateUrl: "partials/toDoList.html", controller: "ToDoListXMLCtrl"}) 
.when("/editUser", {templateUrl: "partials/editUser.html", controller: "EditPageCtrl"})

// else 404 
.otherwise({templateUrl: "partials/home.html", controller: "PageCtrl"}); }]);

