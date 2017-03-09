

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
  
  $scope.userInfo = {
    userLogin: "",
    userPass: "",
    confUserPass: ""
  }
  
  $scope.clearUserInfo = function() {
    $scope.userInfo.userLogin = "";
    $scope.userInfo.userPass = "";
    $scope.userInfo.confUserPass = "";
  }
  
  $scope.loginWarning = {
    nameWarning: false,
    passWarning: false
  }

  $scope.regWarning = {
    nameWarning: false,
    passWarning: false,
    passConfWarning: false,
    newUserCreated: false
  }

if ($scope.logged == false) {

  $scope.loginWindow = true;

  $scope.activateLoginWindow = function () {
    $scope.loginWarning.nameWarning = false;
    $scope.loginWarning.passWarning = false;
    $scope.loginWindow = true;
    $scope.registerWindow = false;
  };

  $scope.activateRegisterWindow = function () {
    $scope.regWarning.nameWarining = false;
    $scope.regWarning.passConfWarning = false;
    $scope.loginWindow = false;
    $scope.registerWindow = true;
  }

  $scope.login = function () {
    let count = 0;
    $scope.users.forEach(function (el) {
      if (el.login.toLowerCase() == $scope.userInfo.userLogin.toLowerCase()) {
        $scope.loginWarning.nameWarning = false;
        console.log("Bingo");
        if (el.pass == $scope.userInfo.userPass) {
          console.log("Pass Bingo");
          $scope.loginWarning.passWarning = false;
          $scope.loginWindow = false;
          $scope.activeUser = $scope.userInfo.userLogin;
          $scope.logged = true;
          $scope.clearUserInfo();
        } else {
          console.log("Pass is incorrect");
          $scope.loginWarning.passWarning = true;
        }
      } else {
        count++
        if (count == $scope.users.length) {
          console.log("No matching logins");
          $scope.loginWarning.nameWarning = true;
        }
      }
    })
  }

  $scope.logOff = function () {
    $scope.logged = false;
    $scope.loginWindow = true;
  }

  $scope.registration = function () {
    $scope.regWarning.nameWarning = false;
    $scope.regWarning.passConfWarning = false;
    $scope.regWarning.passWarning = false;
    $scope.regWarning.newUserCreated = false;
    let isLoginMatch = false;

    $scope.users.some(function (el) {
      console.log(el);
      console.log($scope.userInfo.userLogin);
      if (el.login.toLowerCase() == $scope.userInfo.userLogin.toLowerCase()) {
        $scope.regWarning.nameWarning = true;
        console.log("Logins is matching");
        isLoginMatch = true;
        return true;
      };
    });

    if (!isLoginMatch) {
      if ($scope.userInfo.userPass.length < 3) {
        $scope.regWarning.passWarning = true;
      } else {
        $scope.regWarning.passWarning = false;
        if ($scope.userInfo.userPass == $scope.userInfo.confUserPass) {
          $scope.users.push({
            login: $scope.userInfo.userLogin,
            pass: $scope.userInfo.userPass
          });
          $scope.regWarning.newUserCreated = true;
          console.log($scope.users);
          $scope.clearUserInfo();
        } else {
          $scope.regWarning.passConfWarning = true;
        }
      }
    }
  }
}
});
