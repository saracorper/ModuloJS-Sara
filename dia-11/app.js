/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

// EJERCICIO 1
/*
function unique(arr) {
    let set = new Set(arr);
    return Array.from (new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O*/

// EJERCICIO 2

/*let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let wordModificada = word
      .toLowerCase(word)
      .split("")
      .sort()
      .join("");
    console.log(wordModificada);
    map.set(wordModificada, word);
  }
  return Array.from(map.values());
}

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era" */

// EJERCICIO 3

/*let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

alert(keys); */

//EJERCICIO 5
/*
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();
*/

// EJERCICIO 6
/*
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

alert(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  let suma = 0;
  for (let value of Object.values(salaries)) {
    suma += value;
  }
  return suma;
}

alert(sumSalaries(salaries));*/

// EJERCICIO 7
/*
let user = {
  name: "John",
  age: 30
};

alert(count(user)); // 2

function count(obj) {
  return Object.keys(obj).length;
}
 */

// EJERCICIO 8
/*
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(isAdmin); */

// EJERCICIO 9
/*
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
function topSalary(obj) {
  let mayorSalario = 0;
  let nombreMayorSalario = "";
  for (let [name, salary] of Object.entries(obj)) {
    if (salary > mayorSalario) {
      mayorSalario = salary;
      nombreMayorSalario = name;
    }
  }
  return nombreMayorSalario || null;
}

alert(topSalary(salaries));*/

//EJERCICIO 10
/*
let d = new Date(2012, 1, 20, 3, 12);
alert(d); */

// EJERCICIO 11
/*
let date = new Date(2012, 0, 3); 
alert(getWeekDay(date)); 

function getWeekDay(date) {
  let corto = ["SU","Mo","TU","WE","TH","FR","SA"];
  return corto[date.getDay()]; 
} */
