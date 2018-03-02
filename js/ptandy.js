var app = angular.module("ptandy", []);

app.controller('titleCtrl', ['$scope', ($scope) => {
  $scope.title = 'Title';
}]);

app.controller('bodyCtrl', ['$scope', ($scope) => {
  $scope.hi = 'Hello World';
}]);
