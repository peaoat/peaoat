var app = angular.module("ptandy", []);

app.controller('pCtrl', ['$scope', ($scope) => {
  $scope.hi = 'Hello World';
}]);
