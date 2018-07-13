const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});

module.exports = mongoose.model('Fruit', fruitSchema);



//commenting the fruits model out cause creating a schema up above
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// module.exports = fruits
