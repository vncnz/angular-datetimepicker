
moment.locale(window.navigator.userLanguage || window.navigator.language || 'it');

var testApp = angular.module('TestApp', ['vm-datetimepicker']);


testApp.controller('AppController', ['$scope', function ($scope) {
  $scope.date = null;//new Date(2011, 10, 2, 11, 14, 54, 876);
}]);