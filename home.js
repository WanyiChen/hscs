//setting up
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

app.use(express.static('file'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views','file');

//routing
app.get('/', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('intro', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/history_us', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('history_us', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/history_chn', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('history_chn', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/current_us', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('current_us', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/current_chn', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('current_chn', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/comp', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('comp', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/forward_us', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('forward_us', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/forward_chn', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('forward_chn', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/conclusion', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('conclusion', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/bib', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('bib', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/about', function (req, res) {
  db.each('SELECT * FROM table1', function(err, row) {
    if (err === null) {
      res.render('about', {role : row.role, country : row.country});
    } else {
      throw err;
    }
  });
});

app.get('/explore', function (req, res) {
  res.render('explore');
});

app.post('/explore', function (req, res) {
  var role = req.body.role;
  var country = req.body.country;

  db.run("UPDATE table1 " +
        "SET role = ?, country = ?",
        [role,country]);

    db.each('SELECT role FROM table1', function(err, row) {
      if (err === null) {
        console.log(row.role);
      } else {
        throw err;
      }
    });

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

//initializing database
db.serialize(function () {
  db.run('CREATE TABLE table1 (role TEXT, country TEXT)');
  db.run('INSERT INTO table1 (role, country) VALUES (?, ?)',
    ['student', 'us']);
  console.log('Table created!');
});

//listening on port
app.listen(8080, '0.0.0.0', function () {
  console.log('Listening on port 8080!')
});
