/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

/*EJERCICIO 1 

let age;
if (!(age >= 14 && age <=90));

if (age < 14 || age > 90); */

// let userName = prompt("Username", "");

//  if (userName == "" ||
//         userName == null) {
//     alert("canceled");
//  } else if (userName !== "Admin") {
//    alert("No te conozco");
//  } else if (userName == "Admin") {
//    let password = prompt("Password", "");
//    if (password == "" || password == null) {
//      alert("Canceled");
//    } else if (password == "TheMaster") {
//      alert("Welcome");
//    } else {
//      alert("Wrong password");
//    }
//  }


// EJERCICIO 2

// let userName = prompt("Username", "");

// if (check(userName)) {
//   alert("canceled");
// } else if (userName !== "Admin") {
//   alert("No te conozco");
// } else if (userName == "Admin") {
//   let password = prompt("Password", "");
//   if (check(password)) {
//     alert("Canceled");
//   } else if (password == "TheMaster") {
//     alert("Welcome");
//   } else {
//     alert("Wrong password");
//   }
// }

// function check(str) {
//   if (str == "" || str == null) {
//     return true;
//   } else {
//     return false;
//   }
// }

//EJERCICIO 3

/*let userName = prompt("Username", "");

if (check(userName)) {
  alert("canceled");
} else if (userName !== "Admin") {
  alert("No te conozco");
} else if (userName == "Admin") {
  let password = prompt("Password", "");
  if (check(password)) {
    alert("Canceled");
  } else if (password == "TheMaster") {
    alert("Welcome");
  } else {
    alert("Wrong password");
  }
}

function check(str) {
    return (str == "" || str == null);
}*/

/*EJERCICIO 4 (ejercicio de funciones)

function checkage(age) {
    return (age > 18)? true: confirm("Do you have your parents permission to access this page?");
}*/

/*EJERCICIO 5

function min(a,b) {
    (a < b)? a : b;
}*/

//EJERCICIO 6

function pow(x,n){
    let result = x;

    for(let i = 1; i < n; i++){
         result *= x;
    }

    alert (result);
    return result;
}

pow(2,3);





/* EJERCICIO 7
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
} */

/*EJERCICIO 8

function pow(x,n) {
    let result = x;

    for (let i = !, i < n; i++){
        result = result * x;

    }
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
  alert( pow(x, n) );
} */
