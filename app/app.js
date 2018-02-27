var app = angular.module('app', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/employeeList');

    $stateProvider
        .state('listEmployee', {
            url: '/listEmployee',
            templateUrl: './component/listEmployee/listEmployee.html',
            controller: 'listEmployee'
        })
        .state('searchEmployee', {
            url: '/searchEmployee',
            templateUrl: './component/searchEmployee/searchEmployee.html',
            controller: 'searchEmployee'

        })
        .state('addEmployee', {
            url: '/addEmployee',
            templateUrl: './component/AddEmployee/addEmployee.html',
            controller: 'addEmployee'

        })
});