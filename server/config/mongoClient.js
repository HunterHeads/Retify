const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const DB_NAME = "myDB";
const COLLECTION_NAME = "testowa";
const password = "4XD4pY5dpGkz6ZKg";
const url = `mongodb+srv://admin:${password}@retifydb-mchwi.mongodb.net/test?retryWrites=true&w=majority`;

// Database Name
//const dbName = 'RetifyDB';

const client = {
    getDB: async function() {
        return MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },

    getCollection: async function(collectionName) {
        const databaseConnection = await client.getDB();
        return databaseConnection.db(DB_NAME).collection(collectionName);
    },

    getAll: async function(req, res) {
        const collection = await client.getCollection("UserCredentials");

        collection.find().toArray(function(err, records) {
            if (err) {
                return res.status(500).send("Error getting user");
            } else {
                console.log(records);
                // return res.status(200).send(records);
            }
        });
    },

    checkCredentialsCorrectness: async function(username, password, callback) {
        const collection = await client.getCollection("UserCredentials");
        console.log(await client.getAll());
        console.log(
            `searching data for username: ${username} and password: ${password}`
        );

        collection.findOne(
            {
                username: username,
                password: password,
            },
            callback
        );
    },

    findUserByUserName: async function(username, callback) {
        const collection = await client.getCollection("UserCredentials");
        console.log(`checking does user exist: ${username}`);

        collection.findOne(
            {
                username: username,
            },
            callback
        );
    },

    registerUser: async function(username, password, callback) {
        const collection = await client.getCollection("UserCredentials");
        console.log(
            `searching data for username: ${username} and password: ${password}`
        );

        collection.insertOne(
            {
                username: username,
                password: password,
            },
            callback
        );
    },
};

exports.client = client;
