const express = require('express')
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin', adminRoutes);
// app.use('/', (res, req, next) => {
//   if (res.)
// });

app.use('/', (req, res, next)=>{
      res.sendFile(path.join(__dirname, 'views', '404.html'));
});


// const server = http.createServer(app);

app.listen(4002);
