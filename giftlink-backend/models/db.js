// db.js
require('dotenv').config({ path: './util/import-mongo/.env' });
const MongoClient = require('mongodb').MongoClient;
// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;
let dbInstance = null;
const dbName = "giftdb";
async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };
    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}
module.exports = connectToDatabase;