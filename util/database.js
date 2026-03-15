const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://dejito_db_user:Secret123@tradeify.emhzkl0.mongodb.net/tradeify?retryWrites=true&w=majority';

let _db;

const mongoConnect = callback => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  client
    .connect()
    .then(() => {
      _db = client.db('tradeify');
      console.log('Connected to MongoDB');
      callback(_db);
    })
    .catch(err => {
      console.error('MongoDB connect error:', err);
      throw err;
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error('Database not initialized. Call mongoConnect first.');
  }
  return _db;
};

module.exports = {
  mongoConnect,
  getDb,
};
