"use strict";
//javascript en modo estricto, por ejemplo: no se pueden usar variables no declaradas

//Para hacer el export de app se utiliza {}
import {modulo} from "/js/modules";
import home from "/js/controllers/homeController";

//En los imports que utilicen librerias de bower, utilizaremos el nombre del npm sin el .js
//dado que no existen exports no hace falta poner {} es simplemente para realizar el import
import angular from "angular";
//no tiene nada que ver este $ con el $ de jQuery dado que se pone para completar la estructura, 
//como jQuery no exporta nada, no traeremos nada
import $ from "jquery";

export class App {
    initialize() {

        //son constantes, no se puede volver a definir el objeto pero si sus atributos en el caso de poseerlas.
        //en este caso lo hemos congelado para no poder editar dichos atributos
        modulo.constant("settings", Object.freeze({
           backgroundColor: "red"
        }));

        //Añadimos un valor, puede ser modificado en cualquier momento y por cualquier modulo
        //los values no son inyectables en la fase de configuracion (config)
        modulo.value("color", "red");

        //es el main de angular, puede recibir proveedores
        modulo.config(function($stateProvider, $urlRouterProvider, settings, userRestClientProvider) {
            
            //definimos el uri
            userRestClientProvider.serviceUri = "knowtech";
            //por defecto utilizará la vista home
            $urlRouterProvider.otherwise("/home");
            //Reeditamos la constante settings
            //settings.backgroundColor="blue";
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