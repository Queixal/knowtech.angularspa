"use strict";

/**
*Controladora para todos los elementos de Material
*
*/

//importamos el modulo de controladores de nuestro modulo principal
import {controllers} from "/js/modules";

//Controladora para el friendList
controllers.controller("friendListController", function($scope, $stateParams) {
    $scope.friends = [
                    {nickname : "Matias", description : "Write less do more"},
                    {nickname : "cacaman", description : "I.. AM.. CACAMAN!"}
                    ];
    $scope.friend=null;
    if ($stateParams.hasOwnProperty("nickname")) {
        $scope.friend= $scope.friends.filter(f => f.nickname == $stateParams.nickname)[0];
    }
    
});

//inyectamos los parámetros de entrada para el controler
controllers.$inject = ["$scope", "$stateParams"]