(function (angular) {
    'use strict';
    angular.module('portfolio', ['ngAnimate','ng.deviceDetector']).directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    }).controller('repeatController', ['$scope','deviceDetector', function ($scope,deviceDetector) {
        console.log(deviceDetector);
        $scope.browser=deviceDetector.browser;
        $scope.boards = [
            {
                name: 'About',
                iconClass: 'fa fa-info-circle icon-white',
                isVisible: true
            },
            {
                name: 'Skills',
                iconClass: 'fa fa-wrench icon-white',
                isVisible: false
            },
            {
                name: 'Projects',
                iconClass: 'fa fa-cogs icon-white',
                isVisible: false
            },
            {
                name: 'Testimonials',
                iconClass: 'fa fa-comments icon-white',
                isVisible: false
            },
            {
                name: 'Articles',
                iconClass: 'fa fa-pencil-square-o icon-white',
                isVisible: false
            },
            {
                name: 'Contacts',
                iconClass: 'fa fa-address-book-o icon-white',
                isVisible: false
            }
        ];
        $scope.open = function (board) {
            console.log(board);
        }
        $scope.$on('renderedModal', function (ngRepeatFinishedEvent) {
            console.log(ngRepeatFinishedEvent);
            console.log("done");
            $('#ContactsModal').modal('show');
        })


    }]);
})(window.angular);