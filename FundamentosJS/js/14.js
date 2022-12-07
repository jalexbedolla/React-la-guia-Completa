/* Functions - Arrow Function */

/* const sumar = function (numero, numero2) {
  console.log(numero + numero2);
}; ... esta es la function experssion normal */

const suma = (numero, numero2) => {
  console.log(numero + numero2);
};

suma(40, 29);

/* In the example below, both the parentheses around the parameter and the braces around the function body may be omitted. However, they can only be omitted in certain cases. */

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
(a) => a + 100;

/* The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required. */

// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no arguments)
() => a + b + 100;

/* The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return. */

// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};

/* Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name. */

// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;

/*... y esta es una maldita 'arrow function', eliminas la palabra 'function' antes de los parentesis, y le agregas '=>' despues de los parentesis.  los '()' indican simple y sensillamente que es una funcion.
aclarando, las arrow function solo se pueden usar en las 'function expression */
