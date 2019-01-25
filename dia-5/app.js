/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//console.log("Probando, probando, 1, 2, 3!");

// EJERCICIO 1

/* let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You canceled the execution")
); */

// EJERCICIO 2

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

// EJERCICIO 3

/*function isEmpty(person) {
  for (let key in person) {
    console.log(key);
  }

  return false;
}

let pepe = {
  name: "Pepe",
  surname: "Lopez",
  age: "23"
};

let paco = {
  name: "Paco",
  surname: "Lopez"
};

isEmpty(paco);
isEmpty(pepe);*/

// EJERCICIO 4

/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let result = 0;

function suma(obj) {
  for (let key in salaries) {
    result += salaries[key];
    console.log(result);
  }
}

suma(salaries);*/

// EJERCICIO 5

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric() {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] = menu[key] * 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
