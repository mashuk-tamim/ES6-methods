const data = [{name: 'mashuk', id: 1603113, address: 'gopalganj'}];
// console.log(data[0].address);

const product = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo', price: 70000},
        {id: 2, name: 'apple', price: 170000}
    ]
}

//second product price
// console.log(product.data[1].price);

const user = {
    id: 5001,
    name: 'tamim',
    address: {
        street: {
            first: '101',
            second: 'Mowlana Shamsul Haque Road',
            third: 'Panchuria'
        },
        city: 'Gapalganj'
    }
}
//second address of user
// console.log(user.address.street.second);

const user2 = {
    id: 5001,
    name: 'tamim',
    address: {
        road: {
            first: '101',
            second: 'Mowlana Shamsul Haque Road',
            third: 'Panchuria'
        },
        city: 'Gapalganj'
    }
}
//second address of user2
// console.log(user2.address.street.second); //TypeError: Cannot read properties of undefined (reading 'second')
console.log(user2.address.street?.second); // '?' is used in optional chaining. if street exists then it will allow to go forward. 
