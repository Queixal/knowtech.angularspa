"use strict";

import {directives} from "/js/modules";

directives.directive("sampleDirective", function () {
    return {
         restrict : "EA", //podemos utilizar <sampleDirective ... o bien <div sample-directice.. Element, Atribute, Class
    template: "<span> {{text}} </span>",
    scope: {
        // me permetirá opbtener los atributos del html, por ejemplo:
        // <sampleDirective text="prova"
        // recuperaremos el valor prova
        text: "=text"  //bidireccional
    },
    link: function (scope, element) {
        //al elemento le añadimos una clase
        element.addClass("sample");
    },
    //primero se lanza este método y después el link
    controller: function($scope){

    }
}});

directives.directive("customClick", function () {
    return {
        restrict : "EA", //podemos utilizar <sampleDirective ... o bien <div sample-directice.. Element, Atribute, Class
        scope: {
            clickHandler: "&click" //$=> enlazar funcion
        },
        link: function (scope, element) {
            //al elemento le añadimos una clase
            element.on("click", scope.clickHandler);
        }
}});