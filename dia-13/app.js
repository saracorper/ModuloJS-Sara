/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// EJERCICIO 1
/*/
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));*/

// EJEMPLO
/*
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

loadScript("./one.js")
  .then(function(script) {
    return loadScript("./two.js");
  })
  .then(function(script) {
    return loadScript("./three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  }); */

// EJERCICIO 2
/*
function crearNumero(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve(num);
    } else {
      reject("NADA");
    }
  });
}

crearNumero(12)
  .then(res => console.log(res))
  .catch(err => console.log(err)); */

// EJERCICIO 3

/*Escribir dos funciones que usen promesas que puedas encadenar. La primera función pasarAMayus() que tomará un array de palabras y las pondrá en mayúsculas y la segunda función ordenarPalabras() que las ordenará alfabéticamente.

Si el array contiene datos que no son strings debería lanzar un error.*/

let animales = ["gato", "perro", "pez", "pajaro"]; 

function pasaraMayus(arr) {
  return new Promise(function(resolve, reject) {
    let newArr = arr.map(value => {
      if (typeof value != "string") {
        reject(new Error("Error, no es un string"));
      } else {
        return value.toUpperCase();
      }
    });
    resolve(newArr);
  });
}

// crear funcion ordenar

pasaraMayus(animales)
  .then(res => console.log(res))
  .catch(err => console.log(err));

pasaraMayus(animales);

function ordenarPalabras() {}
