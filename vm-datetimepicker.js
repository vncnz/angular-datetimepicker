
angular.module('vm-datetimepicker', []).directive('datetimeInput', function() {
  return {
    restrict: 'AE',
    require: '^ngModel',
    scope: {
      ngModel: '=',
      style: '@stylePicker'
    },
    templateUrl: 'vmDatePicker-template.html',
    link: function(scope, iElement, iAttrs) {
      // nothing
    },
    controller: ['$scope', function($scope) {
      $scope.moment = moment($scope.ngModel || new Date());
      $scope.d = 0;
      $scope.M = 0;
      $scope.y = 0;
      $scope.h = 0;
      $scope.m = 0;
      
      $scope.refreshModels = function() {
        $scope.d = $scope.moment.date();
        $scope.M = $scope.moment.month()+1;
        $scope.y = $scope.moment.year();
        $scope.h = $scope.moment.hour();
        $scope.m = $scope.moment.minute();
        $scope.weekday = $scope.moment.format('dddd');
        $scope.ngModel = $scope.moment.toDate();
      };
      $scope.refreshModels();
      
      $scope.$watch('d', function(newValue, oldValue) {
        if(oldValue!=newValue) {
            $scope.moment.date(newValue);
            $scope.refreshModels();
        }
      }, false);
      
      $scope.$watch('M', function(newValue, oldValue) {
        //alert(newValue+"."+oldValue)
        if(oldValue!=newValue) {
          $scope.moment.month(newValue-1);
          $scope.refreshModels();
        }
      }, false);
      
      $scope.$watch('y', function(newValue, oldValue) {
        //alert(newValue+"."+oldValue)
        if(oldValue!=newValue) {
          $scope.moment.year(newValue);
          $scope.refreshModels();
        }
      }, false);
      
      $scope.$watch('h', function(newValue, oldValue) {
        //alert(newValue+"."+oldValue)
        if(oldValue!=newValue) {
          $scope.moment.hour(newValue);
          $scope.refreshModels();
        }
      }, false);
      
      $scope.$watch('m', function(newValue, oldValue) {
        //alert(newValue+"."+oldValue)
        if(oldValue!=newValue) {
          $scope.moment.minute(newValue);
          $scope.refreshModels();
        }
      }, false);
      
      $scope.addDay = function(){
        $scope.moment.add(1, "days");
        $scope.refreshModels();
      };
      $scope.removeDay = function(){
        $scope.moment.subtract(1, "days");
        $scope.refreshModels();
      };
      $scope.addMonth = function(){
        $scope.moment.add(1, "months");
        $scope.refreshModels();
      };
      $scope.removeMonth = function(){
        $scope.moment.subtract(1, "months");
        $scope.refreshModels();
      };
      $scope.addYear = function(){
        $scope.moment.add(1, "years");
        $scope.refreshModels();
      };
      $scope.removeYear = function(){
        $scope.moment.subtract(1, "years");
        $scope.refreshModels();
      };
      $scope.addHour = function(){
        $scope.moment.add(1, "hours");
        $scope.refreshModels();
      };
      $scope.removeHour = function(){
        $scope.moment.subtract(1, "hours");
        $scope.refreshModels();
      };
      $scope.addMinute = function(){
        $scope.moment.add(1, "minutes");
        $scope.refreshModels();
      };
      $scope.removeMinute = function(){
        $scope.moment.subtract(1, "minutes");
        $scope.refreshModels();
      };
    }]
  }
});