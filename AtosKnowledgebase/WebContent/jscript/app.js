/** * Main AngularJS Web Application */ 
var app = angular.module('myApp', [ 'ngRoute','myApp.service' ]);

/** * Configure the Routes */ app.config(['$routeProvider', function ($routeProvider) { $routeProvider 
// Pages
.when("/home", {templateUrl: "partials/home.html"}) 
.when("/userList", {templateUrl: "partials/userList.html", controller: "ListPageCtrl"}) 
.when("/addUser", {templateUrl: "partials/addUser.html", controller: "AddPageCtrl"}) 
.when("/toDoList", {templateUrl: "partials/toDoList.html", controller: "ToDoListXMLCtrl"}) 
.when("/editUser", {templateUrl: "partials/editUser.html", controller: "EditPageCtrl"})
.when("/deleteUser", {templateUrl: "partials/deleteUser.html", controller: "DeletePageCtrl"})
.when("/wiki", {templateUrl: "partials/wiki.html"})

}]);

var wikiApp = angular.module('wikiApp', ['ngRoute','myApp.service']);

wikiApp.config(['$routeProvider', function ($routeProvider) { $routeProvider 
.when("/wikihome", {templateUrl: "wikipages/WikiHome.html"})
.when("/Database", {templateUrl: "wikipages/Database.html"})
.when("/FrontEnd", {templateUrl: "wikipages/FrontEnd.html"})
.when("/Restful", {templateUrl: "wikipages/Restful.html"})
.when("/DAOService",{templateUrl: "wikipages/DAOService.html"})
.when("/",{templateUrl: "wikipages/WikiHome.html"})
	
}]);