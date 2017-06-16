//setting up
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('file'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views','file');

//routing
app.get('/', function (req, res) {
  res.render('intro');
});

app.get('/history_us', function (req, res) {
  res.render('history_us');
});

app.get('/history_chn', function (req, res) {
  res.render('history_chn');
});

app.get('/current_us', function (req, res) {
  res.render('current_us');
});

app.get('/current_chn', function (req, res) {
  res.render('current_chn');
});

app.get('/comp', function (req, res) {
  res.render('comp');
});

app.get('/forward_us', function (req, res) {
  res.render('forward_us');
});

app.get('/forward_chn', function (req, res) {
  res.render('forward_chn');
});

app.get('/conclusion', function (req, res) {
  res.render('conclusion');
});

app.get('/bib', function (req, res) {
  res.render('bib');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/explore', function (req, res) {
  res.render('explore');
});

app.post('/explore', function (req, res) {
  var role = req.body.role;
  var country = req.body.country;
  if (country == "us"){
    if (role == "student"){
      res.render('us_student');
    } else if (role == "teacher"){
      res.render('us_teacher');
    } else if (role == "policy"){
      res.render('us_policy');
    } else {
      res.render('us_other');
    }
  } else {
    if (role == "student"){
      res.render('chn_student');
    } else if (role == "teacher"){
      res.render('chn_teacher');
    } else if (role == "policy"){
      res.render('chn_policy');
    } else {
      res.render('chn_other');
    }
  }
});

//listening on port
app.listen(3000, '0.0.0.0', function () {
  console.log('Listening on port 3000!')
});
