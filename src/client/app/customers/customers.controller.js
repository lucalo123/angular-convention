(function() {
    'use strict';
    function Customers() {
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