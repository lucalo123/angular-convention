(function() {
    'use strict';
    var Customers = function() {
        var vm = this;
        
        vm.customers = [
            'Olle',
            'Kalle',
            'Bertil'
        ];
    }
    angular.module('app.customers')
        .controller('Customers', Customers);
})();