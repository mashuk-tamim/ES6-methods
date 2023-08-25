const numbers = [1, 2, 3, 4, 5];

const squareNumber = numbers.forEach(x => x * x);
console.log(squareNumber); //output is 'undefined' because unlike map, forEach doesn't return anything
 