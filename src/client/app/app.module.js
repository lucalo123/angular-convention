(function(){
    'use strict';
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
                templateUrl: '/customers/customers.html',
                controller: 'Customers',
                controllerAs: 'cust'
            });
    });
})();