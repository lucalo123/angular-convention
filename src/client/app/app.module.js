(function(){
    'use strict';
    var clientApp = './src/client/app/';
    angular
        .module('app', [
        'ngRoute',
        'ui.bootstrap',
        'app.core',
        'app.layout',
        'app.customers'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/customers', {
                templateUrl: clientApp + 'customers/customers.html',
                controller: 'Customers',
                controllerAs: 'cust'
            });
    });
})();