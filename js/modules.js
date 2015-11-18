"use strict";

import uiRouter from "angular-ui-router";

//ANGULAR MATERIAL
import material from "angular-material";



//creamos la dependencia, todo lo que haya en [] es la dependencia del modulo
//ng-modulo es el nombre que tendrá el modulo en el conetxto de angular
//modulo es el nombre que tendrá el export en ECMA
//Dado que estan como dependencia, todos los modulos que estan entre [] tendrán las variables del modulo inicial
export var modulo = angular.module("ng-modulo", ["ui.router", "ngMaterial", "modulo.controllers", "modulo.services"]);
export var controllers = angular.module("modulo.controllers",[]);
export var services = angular.module("modulo.services",[]);
