// finding odd number
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumber = array.filter(x => x % 2 === 1);
// console.log(oddNumber); //[ 1, 3, 5, 7, 9 ]

const juniors = ['rady', 'rupai', 'sazzad'];

const juniorList = juniors.filter(name => name.length <= 4);
console.log(juniorList);