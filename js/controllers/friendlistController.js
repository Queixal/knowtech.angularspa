"use strict";

/**
*Controladora para todos los elementos de Material
*
*/

//importamos el modulo de controladores de nuestro modulo principal
import {controllers} from "/js/modules";

//Controladora para el friendList
controllers.controller("friendListController", function($scope, $stateParams, $timeout, $http) {
    //No es un checking uno a uno, se espera a que realice la función y después vuelca todos los datos de forma unitaria
    $scope.textoPruebaDirtyChecking = "hello world before dirty checking"
    $timeout(function() {
        $scope.textoPruebaDirtyChecking = "hello world after dirty checking";
    },1000);

    //Para realizar otro dirty checking hay que realizar un apply
    
       setTimeout(function() {
           $scope.$apply(function() {
                $scope.textoPruebaDirtyChecking = "Forzamos un dirty checking";
           });
        }, 2000) ;
    

    $scope.friends = [];
    
    $http.get("/api/v1/friends").then(function(response){
        $scope.friends = response.data;
    });

    $scope.modifyFriend = function() {
        $http.put("/api/v1/friends/"+$scope.selectedFriend.id);
    }

    $scope.newFriendName = null;
    $scope.selectedFriend = {nickname: ""};

    $scope.addFriend = function() {
        var friendToAdd = {nickname: $scope.newFriendName};
        $http.post("/api/v1/friends", friendToAdd)
        .then(function(response) {
            friendToAdd.id = response.data.id;
            $scope.friends.push(friendToAdd);
        });
    }

    $scope.selectedFriend = null;

    $scope.selectFriend = friend =>  $scope.selectedFriend = friend;

    $scope.friend=null;
    if ($stateParams.hasOwnProperty("nickname")) {
        $scope.friend= $scope.friends.filter(f => f.nickname == $stateParams.nickname)[0];
    }
});

//inyectamos los parámetros de entrada para el controler
controllers.$inject = ["$scope", "$stateParams", "$timeout", "$http"]