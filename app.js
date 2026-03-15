const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const { mongoConnect } = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next();
});

app.use(errorController.get404);

mongoConnect(db => {
  db.command({ ping: 1 })
    .then(() => {
      console.log('Connected to MongoDB and ping successful');
      app.listen(3000, () => {
        console.log('Server listening on port 3000');
      });
    })
    .catch(err => {
      console.error('Ping failed after MongoDB connect:', err);
    });
});
