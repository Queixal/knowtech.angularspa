"use strict";

import {directives} from "/js/modules";

directives.directive("friend", function () {
    return {
         restrict : "EA", //podemos utilizar <sampleDirective ... o bien <div sample-directice.. Element, Atribute, Class
         templateUrl: "/views/include/friend.inc", //include
    scope: {
        //nombre en el scope : nombre del atributo
        nickname: "=nickname",  //bidireccional
        description: "=description"  //bidireccional
    }
    
}});