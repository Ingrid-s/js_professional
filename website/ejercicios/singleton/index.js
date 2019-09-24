"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __importDefault(require("./Singleton"));
var a = Singleton_1.default.getInstance();
var b = Singleton_1.default.getInstance();
console.log('A es igual a B?', a === b);
/*Singleton es un patron de creación / diseño
Es muy útil cuando nuestro desarrollo requiere que sólo una determinada clase pueda ser instanciada una vez
Tiene 3 propiedades:
 una instancia que es privada y estática
 Un constructror privado y un tipo de inicialización
 y getIntance que es un método estático*/ 
