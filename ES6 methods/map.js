const numbers = [1, 2, 3, 4, 5];

// function squareIt(num){
//     return num*num;
// }
const squareIt = x => x * x;

for (let square of numbers) {
    const squareNumber = squareIt(square);
    console.log(squareNumber);
}

//same thing can be done using mapping
// const squareNumber = numbers.map(squareIt);
//same thing can be done using mapping (arrow function inside .map() without callback function)
const squareNumber = numbers.map(num => num*num); //same output
console.log(squareNumber);