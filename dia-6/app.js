/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
// console.log("Probando, probando, 1, 2, 3!");
// EJERCICIO 1
/*let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
};
user.go();*/
// EJERCICIO 2
/*let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined*/
/*EJERCICIO 3

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?*/
// EJERCICIO 4
/*let calculator = {
  read() {
    this.x = +prompt("Valor para x", "");
    this.y = +prompt("Valor para y", "");
  },
  sum(

  ) {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */
// EJERCICIO 5
/*let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

  ladder.up().up().down().showStep(); */
// Para poder saludar el nombre debe tener una "a";
// EJERCICIO 6
/*function Persona(name, text = "Hola") {
  this.name = name;
  this.text = text;
  this.sayHi = function() {
      if(this.name.includes("a" || "A")){
          return this.text + " " + this.name;
      }
  };
}

let persona1 = new Persona("Pedro");
console.log(persona1);
console.log(persona1.sayHi()); */
// Deberia ser asi....
/*function Persona(name, saludo) {
  this.name = name;
  this.sayHi = function() {
    if (this.name.includes("a" || "A")) {
      return saludo(this.name);
    } else {
      return "mierda";
    }
  };
}/*

/*let persona1 = new Persona("Pedro", function saludo(name) {
  return "Hi " + name;
});*/
// console.log(persona1);
/*let persona2 = new Persona(prompt("Como te llamas?"), function saludo(
  name,
  expresion = prompt("Cómo saludas?")
) {
  return expresion + " " + name;
});

//console.log(persona1.sayHi());
console.log(persona2.sayHi());*/
// EJERCICIO 7
// EJERCICIO 8

class Clock {
  constructor(template) {
    this._template = template;
  }
  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
  stop() {
    clearInterval(this._timer);
  }
  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let ms = date.getMilliseconds();
    if (ms < 10) ms = "0" + ms;
    if (ms < 100) ms = "0" + ms;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs)
      .replace("ms", ms);

    console.log(output);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), this.precision);
  }
}

let clock2 = new ExtendedClock("h:m:s:ms", 1000);
    clock2.start();
