"use strict";

import {services} from "/js/modules";

//Definimos el aptron factory para poder inyectar el objeto
// En javascript se sigue la nomenclatura de java mientras que angular tiene la suya propia (standard)
//Tan solo se llama una vez, es un singleton, defines la primera llamada al factory
//Informamos la función inyectora que utilizará el service con la key "stringHelper"
//devolvemos una instancia de la clase dado que es un aptron factory
services.factory("stringHelper", function(){
  class StringHelper {
      capitalize(someString){
        return someString[0].toUpperCase()+someString.substring(1);
      }
  }

  return new StringHelper();
});