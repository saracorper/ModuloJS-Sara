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

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
