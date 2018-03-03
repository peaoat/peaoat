var app = angular.module("ptandy", []);

app.controller('headerCtrl', ['$scope', function($scope) {
  $scope.title = 'henlo werld';
}]);

app.controller('pCtrl', ['$scope', function($scope) {
  $scope.hi = 'Hello World';
}])
.directive('vW', function() {
  return {
    template: '<p>lmao</p>',
  };
});
