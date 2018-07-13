const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

//requiring db here 
require('./db/db');

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
// const Fruits = require('./models/fruits');

// initialized some middleware
// bodyParser allows us to read the
// contents of a form, or the body of a request
// the app.use sets up what middleware you are using
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

//** now that we moved all the routes into fruitController.js we are now going to import the fruitController model.
//we also require the controller after the middleware

const fruitController = require('./controllers/fruitController');


//what we are saying here is that
//every single route in the fruitController
//now starts with /fruits
app.use('/fruits', fruitController);


// // Creating the index route
// // index route should show all the fruits
// app.get('/fruits', (req, res) => {
//   res.render('index.ejs', {
//     fruits: Fruits
//   });
// });
//
// // This is the route that the form is sending
// // its info too
// // aka the create route
// app.post('/fruits', (req, res) => {
//   // contents of the form will be in req.body
//   console.log(req.body, 'this is req.body, should be form info');
//   if(req.body.readyToEat === 'on'){
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//   // adding the contents of the form to the model
//   Fruits.push(req.body);
//   // Now we can add the info from the form to our model
//   // update our model
//
//   // redirects the response back
//   // to the get /fruits route
//   res.redirect('/fruits');
//   // res.send('it was completed')
// });
//
//
// // Create our new Route
//
// app.get('/fruits/new', (req, res) => {
//   // This is where we are showing the form
//   res.render('new.ejs');
// });
//
//
// //Edit Route - to display a single fruit and have the ability to edit it
//
// app.get('/fruits/:index/edit', (req, res) => {
//
// res.render('edit.ejs', {
//   fruit: Fruits[req.params.index],
//   index: req.params.index
//   //we pass index here because we want to know which item we are updating. Most of the time it will be a database id but now it will be our index number
// });
//
// })
//
//
// // Show Route
// app.get('/fruits/:index', (req, res) => {
//
//   // Render is when you want to send
//   // an ejs template to the client
//   res.render('show.ejs', {
//     fruit: Fruits[req.params.index] // This creates
//     // a "fruit" variable in the show page
//   })
// });
//
//
// app.put('/fruits/:index', (req, res) => {
//
//   console.log('am i hitting this route?');
//   console.log(req.body);
//   if(req.body.readyToEat === 'on') {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//     Fruits[req.params.index] = req.body
//     //req.body is the updated info in the form now
//       console.log(Fruits);
//     res.redirect('/fruits');
//
// })
//
// // Delete route
// app.delete('/fruits/:index', (req, res) => {
//   Fruits.splice(req.params.index, 1);
//   console.log(req.params.index, ' this is req.params')
//   res.redirect('/fruits');
// })



//==========================
app.listen(3000, () => {
  console.log('listening on port 3000');
});
