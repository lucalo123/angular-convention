(function() {
    'use strict';
    var widgetsSrc = './src/client/app/widgets/';
    angular.module('app.widgets', [])
        .directive('caCustomers', function () {
            return {
                templateUrl: widgetsSrc + 'caCustomers.html',
                restrict: 'E',
                controller: function () {
                    var vm = this;
                    vm.isCollapsed = false;
                    vm.collapse = function () {
                        vm.isCollapsed = !vm.isCollapsed;
                    };
                },
                controllerAs: 'cw'
            };
        });
})();