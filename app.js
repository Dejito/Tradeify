const express = require('express')
const boodyParser = require('body-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product', (req, res, next)=> {
//     console.log("got to second middleware");
//     res.send(
//     <form action='/product' method='POST'><input type="text" name="title"></input><button type="submit">Add Product</button></form>);
//     // res.send("<form><input type="text name="title"><button type="submit">Add Product<button/></form>');
// });

app.use('/add-product', (req, res, next) => {
    console.log("got to second middleware");
  
    res.send(`
      <form action='/product' method='POST'>
        <input type="text" name="title">
        <button type="submit">Add Product</button>
      </form>
    `); 
  });

app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
    next();
});


app.use('/', (req, res, next)=> {
    console.log("got to first midware");
    res.send("<h2>Hello from the / side</h2>");
    next();
});



// const server = http.createServer(app);

app.listen(4002);
