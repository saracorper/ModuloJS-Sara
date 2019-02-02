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

/*let arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) {
  return b - a;
});
alert(arr);*/

// EJERCICIO 5

/*let arr = ["HTML", "JavaScript", "CSS"];
let arr2 = arr.slice();

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  return arr2.sort();
} */

// EJERCICIO 6

/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

alert(names); // John, Pete, Mary */

// EJERCICIO 7

/*function Calculator() {
  let metodos = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b
  };

  this.calculate = function(str) {
    let operacion = str.split(" "),
      a = +operacion[0],
      op = operacion[1],
      b = +operacion[2];

    if (!metodos[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return metodos[op](a, b);
  };

  this.addMethod = function(name, func) {
    metodos[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8 */

// EJERCICIO 8

/*let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(users => ({
  fullName: `${users.name} ${users.surname}`,
  id: users.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith 
*/

// EJERCICIO 9

/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

sortByName(arr);

function sortByName(users) {
  arr.sort((a, b) => (b.name > a.name ? 1 : -1));
}

// now: [john, mary, pete]
alert(arr[1].name); // Mary*/

//EJERCICIO 11

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
