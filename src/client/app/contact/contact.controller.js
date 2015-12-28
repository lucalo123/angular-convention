(function () {
    'use strict';
    var Contact = function () {
        var vm = this;
        vm.text = 'TODO';
    };
    angular.module('app.contact', [])
        .controller('Contact', Contact);
})();