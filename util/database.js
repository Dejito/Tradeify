const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dejito_db_user:Secret123@tradeify.emhzkl0.mongodb.net/?appName=tradeify";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db; // Private variable to hold the database instance

const mongoConnect = async () => {
  try {
    await client.connect();
    // Verify connection
    await client.db("tradeify").command({ ping: 1 });
    console.log('Connected to MongoDB and verified with ping');
    
    // Store the DB instance for easy access later
    _db = client.db("tradeify"); 
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
};

// This function allows other files to grab the DB instance without reconnecting
const getDb = () => {
  if (!_db) {
    throw new Error('Database not initialized. Call mongoConnect first!');
  }
  return _db;
};

module.exports = { mongoConnect, getDb };

// const { getDb } = require('../util/db');