//tipescript añade tipado a js
/*console.log('Hello, Typescript');

//para añadir el tipo de dato la notación es /: el tipo de dato/
function add(a: number, b: number){
return a + b;
}
//si colocamos el puntero sobre sum, nos dice el tipo de dato que es, o que será, porque hace análisis estático del código.
const sum = add(2, 3);*/


/////////////Booleanos
let muted : boolean = true;
muted = false;
//En la siguiente lìnea typescript nos avisa que hay un error y que es que no se le puede asignar la cadena "callado" a un tipo de dato boolean.
// Ejemplo de error: muted = 'callado';


////////////Números
let age = 6
let numerador: number = 42;
let denominador: number = age;
//En la línea anteriior, si quisieramos escribir let age = '6' y luego pasar age a number, igual marcarìa error, pues hace un seguimiento de los tipos de datos de variables a traves del tiempo.
let resultado = numerador / denominador;

///////////Sring
let nombre: string = 'Richard'
let saludos = `Me llamo ${nombre}`;

///////////Arreglos

//para la siguiente línea defifinos un arreglo de strings
let people: string[] = [];
people = ['Isabel']
//por lo tanto, si yo quiero hacer  people.push(9000), me marcará error.
//si hacemos peoplle.push('9000') entonces si lo acepta.

//para definir arreglos que contengan distintos tipos de datos:
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);
console.log(peopleAndNumbers);

//ENUM
/*Las enumeraciones nos permiten definir un conjunto de valores nùmericos pero a cada uno le asignamos un nombre para hacerlo más amigable.
Inician en 0 y se auto incrementan dependiendo de la cantidad de valores que poseean.
Se pueden entrar con notación de punto a un valor númerico, si se quiere consultar el nombre de ese valor debemos ser más específicos.
*/
/*enum Color {
    Rojo,
    Verde, 
    Azul,
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)
//Esto nos devuelve // Mi color favorito es 1
*/

// si queremos el nombre del valor númerico, entonce serìa asì:
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}
let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)
// esto nos da: Mi color favorito es Verde


//////////////Any
/*Usamos Any, cuándo no sabemos de que tipo será una variable, por ejemplo cuando consumimos API's de terceros.*/

//El código siguiente nos arroja error.
/*let comodin = 'Jocker';
comodin = { type: 'Wildcarrd' };
*/

let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };
console.log(comodin);

let someObject: object = { type: 'Wildcard' };

/////////////////Funciones
//para explicitar el valor que regresa una funciòn despues de los paréntesis agregamos : tipoDeDato
function add(a: number, b: number):number {
    return a + b;
}
const suma = add(4, 6);

//En la siguiente lìnea cuando la función regrese una función lo hacemos específico con :(tipodato) => tipodato
function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//En la siguiente lìnea, cuando no sabemos si en realidad nos pasarán los dos argumentos de la función agregamos ? antes de la declaración del tipo de dato de la función para que sea válido, de otra forma marcara error
/*function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const ing = fullName ('Ingrid')
console.log (ing);*/

/*Siguiendo el mismo ejemplo de la función anterior,
si quisieramos algún valor por defecto en nuestros argumentos, lo hacemos añadiendo = "valorPorDefecto" 
si aún con la declaración del valor por omisión, nos pasan todos los argumentos esperados, tomará el valor de estos*/
function fullName(firstName: string, lastName: string = 'Lee'): string {
    return `${firstName} ${lastName}`
}

const i = fullName('Bruce');
console.log(i);


/////////////////Interfaces
/*Las interfaces son... ¿como contratos para escribir nuestro código?
Definen la forma exacta que debe tener un objeto, si algo es opcional, debemos hacerlo explicito*/
enum Color {
    Amarillo = 'Amarillo',
    Purpura = 'Purpura',
}
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Purpura,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`;
}

console.log(rect.toString());