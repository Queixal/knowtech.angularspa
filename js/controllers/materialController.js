"use strict";

/**
*Controladora para todos los elementos de Material
*
*/

//importamos el modulo de controladores de nuestro modulo principal
import {controllers} from "/js/modules";

//Controladora para los sideNav
controllers.controller("sideNav", function($scope, $mdSidenav ) {
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
});