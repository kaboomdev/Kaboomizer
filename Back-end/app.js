var express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser')
var morgan = require('morgan');
const path = require('path');
var cors = require('cors');
var app = express()



var allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


// let rawdata = fs.readFileSync('students.json');  
// let student = JSON.parse(rawdata);
// console.log(student);


//Use bodyParser for processing POST request body data
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Use morgan for logging request information to the console
app.use(morgan('dev'));



//Request Handlers
app.post('/signin', function (req, res) {
  var userData = req.body.userData;
  //Do some database operation to validate user info..
  if (validated) {
    res.status(200).send(someSuccessData);
  } else {
    res.status(422).send("username/password incorrect!")
  }
});

app.get("/profile/:id", function (req, res) {
  var userID = req.params.id
  //Fetch profile data from the DB using the provided ID.
  res.status(200).send(userProfileData)
});

app.get('/', function (req, res) {
  console.log("Hello from server");
  console.log(req.body);
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.post('/addRecipes', function (req, res) {
  res.send(req.body);


  fs.writeFile('recipes.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
});

app.post('/addIngredients', function (req, res) {
  res.send(req.body);
  fs.writeFile('ingredients.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
});

//Tell our app which port to listen on
app.listen(3000, function () {
  console.log("server listening on port 3000");
});

// fs.writeFile('student-3.json', data2, (err) => {  
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');