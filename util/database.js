const { MongoClient, ServerApiVersion } = require("mongodb");

const mongodbUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tradeify";

const client = new MongoClient(mongodbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: mongodbUri.startsWith("mongodb+srv://"),
});

let _db; // Private variable to hold the database instance

const mongoConnect = async () => {
  try {
    await client.connect();
    // Verify connection
    await client.db("tradeify").command({ ping: 1 });
    console.log("Connected to MongoDB and verified with ping");

    // Store the DB instance for easy access later
    _db = client.db("tradeify");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message || err);
    console.error("Current MongoDB URI:", mongodbUri);
    console.error(
      "If using Atlas, check your network IP whitelist and that the cluster is running.",
    );
    throw err;
  }
};

// This function allows other files to grab the DB instance without reconnecting
const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized. Call mongoConnect first!");
  }
  return _db;
};

module.exports = { mongoConnect, getDb };

// const { getDb } = require('../util/db');
