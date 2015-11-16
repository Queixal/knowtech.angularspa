"use strict";

//importamos el modulo de controladores de nuetsro modulo principal
import {controllers} from "/js/modules";

//importamos el factory de stringHelpers
import stringHelperFactoryJS from "/js/services/stringHelperFactory";

//importamos el service de mathService
import mathServiceJS from "/js/services/mathService";

//importamos el provider
import restprovider from "/js/services/userRestClientProvider";

//scope=> objeto view
//timeout => objeto que nos proporciona la api de los timeouts
//stringHelper-> es el nombre de la key en el factory definido en el service stringHelperFactory
//math -> el servicio de math definido en mathService
controllers.controller("defaultController", function($scope, $timeout, stringHelper, mathService, userRestClient){
    //realizamos la llamada al cliente rest para la prueba del provider
    userRestClient.getAllUsers();
    //definimos la variable text
    $scope.text = "Esto viene del controlador en la primera carga de la pantalla";
    $scope.enabled = true;
    //realizamos un timeout de javascript pero con el objeto de angular
    $timeout(function(){
        $scope.text = "Esto ha cambiado con el timeout en el controlador!!";
    }, 3000);
    //definimos la lista de personas
    $scope.persons = [{name : "Ana"}, {name : "tomas"}];
    $scope.personName = "";
    //método que añade personas
    $scope.addPerson = function() {
      $scope.persons.push({name : $scope.personName});  
    };
    //método que añade personas
    $scope.dropPerson = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1);
    };
    //método onchange
    $scope.$watch("personNameToSearch", function(newValue, oldValue){
        $scope.personsAutocomplete.length = 0;
        for(var i = 0;  i < $scope.persons.length; i++){
            if ($scope.persons[i].name.indexOf(newValue) > -1) {
                $scope.personsAutocomplete.push($scope.persons[i]); 
            }
        }

        //TO DO
        /*$scope.persons[i].filter(item => item.name.indexOf(newValue) > -1)
            .forEach( item => $scope.personsAutocomplete.push(item)); */
    });

    $scope.personsAutocomplete = [];
});