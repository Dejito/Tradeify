const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    return getDb.collection("users").insertOne(this);
  }

  static findById(prodId) {
    return getDb
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(prodId) });
  }
}

module.exports = User;
