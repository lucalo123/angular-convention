(function () {
    'use strict';

    angular.module('app.layout', [])
        .controller('Navbar', ['$scope', function ($scope) {
            $scope.isCollapsed = false;
            $scope.doCollapse = function () {
                $scope.isCollapsed = !$scope.isCollapsed;
            };
        }]);
})();