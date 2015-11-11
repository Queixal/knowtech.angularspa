"use strict";
//javascript en modo estricto, por ejemplo: no se pueden usar variables no declaradas

//Para hacer el export de app se utiliza {}
import {modulo} from "/js/modules";
import home from "/js/controllers/HomeController";

//En los imports que utilicen librerias de bower, utilizaremos el nombre del npm sin el .js
//dado que no existen exports no hace falta poner {} es simplemente para realizar el import
import angular from "angular";
//no tiene nada que ver este $ con el $ de jQuery dado que se pone para completar la estructura, 
//como jQuery no exporta nada, no traeremos nada
import $ from "jquery";

export class App {
    initialize() {

        //es el main de angular, puede recibir proveedores
        modulo.config(function($stateProvider, $urlRouterProvider) {
            //por defecto utilizará la vista home
            $urlRouterProvider.otherwise("/home");
            
            //en lugar de llamarlo vista lo llaman estado
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "/views/home.html",  
                    controller: "defaultController"
                });
        });
        angular.bootstrap(document.getElementById("contenedor"), ["ng-modulo"]);
    }
}

$(function() {
    var app = new App();
    app.initialize(); 
});