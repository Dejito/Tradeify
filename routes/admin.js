const express = require('express');

const router = express.Router();


router.get('/add-product', (_req, res) => {
    console.log("got to add-products middleware");
  
    res.send(`
      <form action='/admin/product' method='POST'>
        <input type="text" name="title"/>
        <button type="submit">Add Product<button/>
      </form>
    `); 
  });

router.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
    next();
});


module.exports = router;