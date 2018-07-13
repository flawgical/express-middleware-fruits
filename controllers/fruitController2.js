//initial file with some errors that need to be figured out
const express = require('express');
// next we set up the router
// a controller is a router that tells things what
//to do

const router = express.Router();
const Fruits = require('../models/fruits');

// Creating the index route
// index route should show all the fruits
router.get('/', (req, res) => {
  res.render('index.ejs', {
    fruits: Fruits
  });
});

// This is the route that the form is sending
// its info too
// aka the create route
router.post('/', (req, res) => {
  // contents of the form will be in req.body
  console.log(req.body, 'this is req.body, should be form info');
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // adding the contents of the form to the model
  Fruits.push(req.body);
  // Now we can add the info from the form to our model
  // update our model

  // redirects the response back
  // to the get /fruits route
  res.redirect('/fruits');
  // res.send('it was completed')
});


// Create our new Route

router.get('/new', (req, res) => {
  // This is where we are showing the form
  res.render('new.ejs');
});


//Edit Route - to display a single fruit and have the ability to edit it

router.get('/:index/edit', (req, res) => {

res.render('edit.ejs', {
  fruit: Fruits[req.params.index],
  index: req.params.index
  //we pass index here because we want to know which item we are updating. Most of the time it will be a database id but now it will be our index number
});

})


// Show Route
router.get('/:index', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  res.render('show.ejs', {
    fruit: Fruits[req.params.index] // This creates
    // a "fruit" variable in the show page
  })
});


router.put('/:index', (req, res) => {

  console.log('am i hitting this route?');
  console.log(req.body);
  if(req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
    Fruits[req.params.index] = req.body
    //req.body is the updated info in the form now
      console.log(Fruits);
    res.redirect('/fruits');

})

// router.put('/fruits/:index', (req, res) => {
//   if (req.body.readyToEat === 'on') {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//
//   Fruits[req.params.index] = req.body;
//   res.redirect('/fruits')
//
// })

// Delete route
router.delete('/:index', (req, res) => {
  Fruits.splice(req.params.index, 1);
  console.log(req.params.index, ' this is req.params')
  res.redirect('/fruits');
})







module.exports = router;
