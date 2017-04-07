function MainController($scope) {
  $scope.name = 'Yopi';
}

angular
  .module('app')
  .controller('MainController', MainController);
