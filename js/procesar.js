"use strict";
var forma = document.getElementById("forma"),
campos = ["boleta","nombre","grupo","materia","fecha"],
salidas = ["salidaBoleta", "salidaNombre","salidaGrupo","salidaMateria","salidaFecha"];
forma.addEventListener("submit",procesa,false);
function procesa(){
  for(var i=0, longitud = campos.length; i < longitud; i++){
    var campo= forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
}