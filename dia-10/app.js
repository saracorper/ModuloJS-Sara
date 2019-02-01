/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// EJERCICIO 1

/*function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));*/

// EJERCICIO 2
/*let arr = [5, 3, 8, 1];
let mensaje = "hola"
function filterRange(arr, a, b) {
  return arr.filter(item => {
    if (item >= a && item <= b) {
        mensaje = "adios"
      return true;
    } else {
      return false;
    }
  });
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); */

// EJERCICIO 3

/*let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 

alert( arr );


function filterRangeInPlace(arr, a, b) {

    for(let i = 0;i < arr.length; i++){
        let valor = arr[i];

        if((valor >= a && valor <= b)){
            arr.splice(i, 1);
        }
    }         
}*/

// EJERCICIO 4

let arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) {
  return b - a;
});
alert(arr);
