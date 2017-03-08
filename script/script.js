

angular.module("SomeApp", [])
  .controller("SomeAppCtrl", function($scope) {
  
  $scope.users = [
    {login: "Zimzik", pass: "123"},
    {login: "Dima", pass: "321"},
    {login: "Vasia", pass: "111"}
  ];
  
  $scope.logged = false;
  $scope.loginWindow = false;
  $scope.registerWindow = false;
  $scope.activeUser;
  $scope.userLogin;
  $scope.userPass;
  
  $scope.loginUserNameWarn = false;
  $scope.loginUserPassWarn = false;
  
  $scope.regUserNameWarn = false;
  $scope.regUserPassConfWarn = false;
  
if ($scope.logged == false) {

  $scope.loginWindow = true;

  $scope.activateLoginWindow = function() {
    $scope.loginUserNameWarn = false;
    $scope.loginUserPassWarn = false;
    $scope.loginWindow = true;
    $scope.registerWindow = false;
  };

  $scope.activateRegisterWindow = function() {
    $scope.regUserNameWarn = false;
    $scope.regUserPassConfWarn = false;
    $scope.loginWindow = false;
    $scope.registerWindow = true;
  }
  
  $scope.login = function() {
    let count = 0;
    let userLogin = $scope.userLogin;
    $scope.users.forEach(function(el) {
      console.log(el.login.toLowerCase());
      console.log(userLogin);
      if ((el.login.toLowerCase()) == ($userLogin.toLowerCase())) {
/*        if (el.pass == $scope.userPass) {
          $scope.activeUser = $scope.userLogin;
          $scope.logged = true;
          return;
        } else {
            $scope.loginUserNameWarn = false;
            $scope.loginUserPassWarn = true;
          }*/
        console.log("Bingo");
        console.log(el);
        } else {
/*          count++;
          if (count == $scope.users.length) {
            $scope.loginUserNameWarn = true;
        }*/
      }
    })
  }
}
});