const express = require('express');
const app = express();//app is an object
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const Fruits = require('./models/fruits')

app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method


//some middleware
//app.use allows us to implement middleware
//this middleware will run on every route. Check terminal log

app.use((req, res, next) => {
  console.log('I run on every route');
//this sends the request to the next piece in the
//call stack (aka the next middleware piece or final route)

//the next will keep sending it to the next middleware
  next()

})

//this now lives in models folder in file fruits.js
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
// app.get('/fruits', (req, res) => {
//   res.send(Fruits)
// })

// app.get('/fruits/:index', (request, response) => {
//   console.log(request.params, '<-- this is req.params');
//     response.send(Fruits[request.params.index]);
// });

//Create new route. This happenes after show route because the //broweser would never read the word new. Because the :index //will read the 'new' word instead.

app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: Fruits
  })
})

//this is the create route. see ejs file for form attribute
//here we are doing a res.send just to show that the post worked not
//not actually rendering anything. will be commented out and written //again
// app.post('/fruits', (req, res) => {
//
//   res.send('Post worked')
// })

//sending content to the server via a POST request
// and we are accessing the information from the form in req.body
// body parser is middleware. Its a function that sits between
// the clients request and the final destination
// every request goes through the app.use(bodyParser) function.
app.post('/fruits', (req, res) => {

  // the content of the form will always be in req.body
  //we need to add req.body to the models
console.log(req.body, 'this is req.body, should be form info')
if(req.body.readyToEat === 'on') {
  req.body.readyToEat = true;
} else {
  req.body.readyToEat = false;
}
  Fruits.push(req.body);

  // res.send('Post worked')
  res.redirect('/fruits');
  //we do a redirect instead of send to redirect the response back to //the fruit route
})

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})
//route
app.get('/fruits/:index', (request, response) => {
  response.render('show.ejs', {
    fruit: Fruits[request.params.index]
  })
});

//delete

// app.delete('/fruits/:index', (req, res) => {
//
//   res.send('delete working')
// })

app.delete('/fruits/:index', (req, res) => {
	fruits.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});

app.listen(3000, () => {
    console.log("I am listening");
});
