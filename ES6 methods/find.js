// finding odd number
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumberFilter = array.filter(x => x % 2 === 1);
console.log(oddNumberFilter); // [ 1, 3, 5, 7, 9 ]

const oddNumberFind = array.find(x => x % 2 === 1);
console.log(oddNumberFind); // 1
// find is similar to filter expect it returns only first match