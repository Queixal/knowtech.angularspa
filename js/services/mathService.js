"use strict";

import {services} from "/js/modules";

//definimos un servicio con la funcion service
//devolvemos la definicion de una clase y no su instancia
services.service("mathService", function(){// es una funcion constructora
    //constructor de la nueva instancia
    //se utiliza para que, por ejemplo si tenemos una libreria que no está definida para angular, 
    //podemos declararlo como un servicio para angular y así poderlo utilizar, para ello adaptamos el
    //constructor que estamos creando para convertir la libreria a una inyectable para angular.
    //creamos una funcion con una lambda expression
    this.sumOne = (someNumber) => someNumber +1;
});