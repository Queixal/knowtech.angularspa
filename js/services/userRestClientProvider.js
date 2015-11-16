"use strict";

import {services} from "/js/modules";


//En la fase de configuración tendré acceso a los atributos del provider, no obstante en 
//las otras partes de la aplicación solo me inyectará la función del $get
services.provider("userRestClient", function(){
   var provider = {
       serviceUri: "",
       //es el cuerpo que se pasa en el factory (.factory)
     $get: function() {
        //Es el objeto que devolverá el .factory
        return {
            getAllUsers: function() {
                //puedo acceder a las variables del provider
                var serviceUri = provider.serviceUri;
                return [];
            }
        };
     }  
   };

   return provider;
});