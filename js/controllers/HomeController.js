"use strict";

//importamos el modulo de controladores de nuetsro modulo principal
import {controllers} from "/js/modules";

//scope=> objeto view
//timeout => objeto que nos proporciona la api de los timeouts
controllers.controller("defaultController", function($scope, $timeout){
    //definimos la variable text
    $scope.text = "Esto viene del controlador en la primera carga de la pantalla";
    $scope.enabled = true;
    //realizamos un timeout de javascript pero con el objeto de angular
    $timeout(function(){
        $scope.text = "Esto ha cambiado con el timeout en el controlador!!";
    }, 3000);
    //definimos la lista de personas
    $scope.persons = [];
    $scope.personName = "";
    //método que añade personas
    $scope.addPerson = function() {
      $scope.persons.push({name : $scope.personName});  
    };
    //método que añade personas
    $scope.dropPerson = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
    };

});