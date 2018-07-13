//this is where we weill set up our db connection

const mongoose = require('mongoose');

//food is the name of our database
//that is automatically created
mongoose.connect('mongodb://localhost/food');


//these are event listeners we are about to set up each with error messages and logs 
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to Mongodb');
})

mongoose.connection.on('error', (err) => {
  console.log(err, 'Mongoose failed to connect');
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})
