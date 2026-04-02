const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart; //{items: []}
    this.id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    const cartProduct = this.cart.items.findIndex((cp) => {
      return cp.productId === product._id;
    });
    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      this.cart.items.push({
        productId: new mongodb.ObjectId(product.id),
        quantity: 1,
      });
    }
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new mongodb.ObjectId(this.id) },
        { $set: { cart: this.cart } },
      );
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(prodId) });
  }
}

module.exports = User;
