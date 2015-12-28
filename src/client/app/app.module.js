(function(){
    'use strict';
    var clientApp = './src/client/app/';
    angular
        .module('app', [
        'ngRoute',
        'ui.bootstrap',
        'app.core',
        'app.widgets',
        'app.layout',
        'app.customers',
        'app.contact'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/customers', {
                templateUrl: clientApp + 'customers/customers.html',
                controller: 'Customers',
                controllerAs: 'cust'
            })
            .when('/contact', {
                templateUrl: clientApp + 'contact/contact.html',
                controller: 'Contact',
                controllerAs: 'cont'
            });
    }]);
})();