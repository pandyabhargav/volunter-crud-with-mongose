const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./Router');
const mydb = require('./Config/mongo')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server running at http://localhost:${port}`);
  }
});
