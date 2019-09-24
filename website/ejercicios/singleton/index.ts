import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('A es igual a B?', a === b);

/*Singleton es un patron de creación / diseño
Es muy útil cuando nuestro desarrollo requiere que sólo una determinada clase pueda ser instanciada una vez
Tiene 3 propiedades:
 una instancia que es privada y estática 
 Un constructror privado y un tipo de inicialización
 y getIntance que es un método estático*/