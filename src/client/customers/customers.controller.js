(function () {
    'use strict';
    var Customers = function ($http) {
        var vm = this;

        vm.customers = [
            'Olle',
            'Kalle',
            'Bertil'
        ];
    };
    Customers.$inject = ['$http'];
    angular.module('app.customers')
        .controller('Customers', Customers);
})();