/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

// EJERCICIO 1

function maxSubSum(arr) {
  let msf = 0;
  let meh = 0;
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    meh += arr[i];
    if (meh < 0) {
      meh = 0;
    }
    if (msf < meh) {
      msf = meh;
      
    }
    return msf;
  }
}

console.log(maxSubSum([-1, 2, 3, -9]));
