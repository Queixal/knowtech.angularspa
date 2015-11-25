"use strict";

import {directives} from "/js/modules";

directives.directive("friend", function () {
    return {
         restrict : "EA", //podemos utilizar <sampleDirective ... o bien <div sample-directice.. Element, Atribute, Class
         templateUrl: "/views/include/friend.inc", //include
    scope: {
        nickname: "=nickname"  //bidireccional
        description: "=description"  //bidireccional
    }
    
}});