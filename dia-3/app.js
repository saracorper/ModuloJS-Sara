/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log(
  "Probando, probando, 1, 2, 3!"
); /*for (i = 0; i < 5; i++) alert(i);
for (i = 0; i < 5; i++) alert(i); // Los dos se paran en 4 por que el valor devuelto del incremento no se usa aqui. Es solo una declaración.*/ // el ultimo valor mostrado es 5 por que i++ coge el valor antiguo y el ++i coge el actual. //EJERCICIO 3 // EJERCICIO 4

//EJERCICIO 1

/*let i = 3;

while (i) {
  alert(i--);
}*/
//el ultimo en mostrarse en la alerta es 1 porque 0 es falso y ya rompe el bucle

//EJERCICIO 2

/*i = 0;
while (++i < 5) alert(i); // El ultimo valor que muestra es 4 por que 5 ya rompe la condicion.

i = 0;
while (i++ < 5) alert(i);*/ /*for (i = 2; i <= 10; i++) {
  if (i % 2 == 0);
  {
    alert(i);
  }
}*/

// EJERCICIO 5

//Reescriba el código cambiando el bucle for a while sin alterar su comportamiento (la salida debería permanecer igual).

/*for (i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}*/

//EJERCICIO 6

// Escriba un bucle que solicite un número mayor que 100. Si el visitante ingresa otro número, pídale que ingrese nuevamente.

//El bucle debe solicitar un número hasta que el visitante ingrese un número mayor que 100 o cancele el input o ponga una línea vacía.

//Aquí podemos asumir que el visitante solo ingresa números. No es necesario implementar un manejo especial para una entrada no numérica en esta tarea.

/*let num;

do {
  num = prompt("Enter a number greater than 100", 0);
} while (num <= 100 && num);*/

// EJERCICIO 7

let n = 10;

miperroguapo: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue miperroguapo;
  }
  alert(i);
}

//EJERCICIO 8
let browser;

if (browser == "Edge") {
  alert("You have got the edge");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("we hope...");
}

// EJERCICIO 9

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
