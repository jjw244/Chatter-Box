(function () {
  function UserNameInstanceCtrl($uibModalInstance, $scope) {

    $scope.create = function () {
      
      if ($scope.username === undefined) {
        event.preventDefault();
      } else {
        $uibModalInstance.close($scope.username);
      }
    }
  };

  angular
    .module('chatterBox')
    .controller('UserNameInstanceCtrl', UserNameInstanceCtrl);
})();
