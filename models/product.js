const mongodb = require('mongodb'); 
const { getDb } = require('../util/database'); 

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  } 

  save() {
    const db = getDb();
    return db.collection('products')
    .insertOne(this)
    .then(result => {
      console.log('Product saved:', result);
    })
    .catch(err => {
      console.error('Error saving product:', err);
    });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray();
  }

  static findById(prodId) {
    const db = getDb();
    return db.collection('products')
    .find({ _id: new mongodb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log('Product found:', product);
      return product;
    })
    .catch(err => {
      console.error('Error finding product:', err);
    });
  }

}


module.exports = Product;

  // title: Sequelize.STRING,
  // price: {
  //   type: Sequelize.DOUBLE,
  //   allowNull: false
  // },
  // imageUrl: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  // description: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // }
// });

// module.exports = Product;


