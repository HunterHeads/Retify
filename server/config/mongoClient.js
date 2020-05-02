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
  getDB: async function () {
    return MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },

  getCollection: async function (collectionName) {
    const databaseConnection = await client.getDB();

    return databaseConnection.db(DB_NAME).collection(collectionName);
  },

  getAll: async function (req, res) {
    const collection = await client.getCollection("UserCredentials");

    collection.find().toArray(function (err, records) {
      if (err) {
        return res.status(500).send("Error getting user");
      } else {
        console.log(records);
        // return res.status(200).send(records);
      }
    });
  },

  checkCredentialsCorrectness: async function (username, password, callback) {
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

  findUserByUserName: async function (username, callback) {
    const collection = await client.getCollection("UserCredentials");
    console.log(`checking does user exist: ${username}`);

    collection.findOne(
      {
        username: username,
      },
      callback
    );
  },

  registerUser: async function (username, password, callback) {
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

  rateSong: async function (songId, userName, rate, callback) {
    const collection = await client.getCollection("SongsRates")

    console.log(`attempt of rating song: ${songId} by user: ${userName}`)

    collection.updateOne(
      {
        userName: userName,
        songId: songId,
      },
      {
        $set: {
          userName: userName,
          songId: songId,
          rate: rate,
        }
      },
      {
        upsert: true
      },
      callback
    )
  },

  getAverageSongRate: async function (songId, callback) {
    const collection = await client.getCollection("SongsRates")

    console.log(`getting average rate for song: ${songId}`)

    collection.aggregate(
      [
        {
          $match: { "songId": songId }
        },
        {
          $group: {
            _id: songId,
            average: { $avg: "$rate" }
          }
        },
      ]).next(callback)
  },

  getSongRateForSpecificUser: async function (songId, userName, callback) {
    const collection = await client.getCollection("SongsRates")

    console.log(`getting rate for song: ${songId} and user: ${userName}`)
    collection.aggregate(
      [
        {
          $match: {
            "songId": songId,
            "userName": userName,
          }
        },
        {
          $group: {
            _id: null,
            songId: { $first: "$songId" },
            userName: { $first: "$userName" },
            rate: { $first: "$rate" },
          }
        },
      ]).next(callback)
  },

  getAllSongsRatesForSpecificUser: async function (userName, callback) {
    const collection = await client.getCollection("SongsRates")

    collection.aggregate(
      [ { $match : { userName : `${userName}` } } ]
    ).toArray().then(callback)
  },

  extractAllSongs: async function (callback) {
    const collection = await client.getCollection("SongsRates")

    collection.find().toArray(callback);
  },

  getArtistRateForSpecificUser: async function (artistId, userName, callback) {
    const collection = await client.getCollection("ArtistsRates")

    console.log(`getting rate for song: ${artistId} and user: ${userName}`)
    collection.aggregate(
      [
        {
          $match: {
            "artistId": artistId,
            "userName": userName,
          }
        },
        {
          $group: {
            _id: null,
            artistId: { $first: "$artistId" },
            userName: { $first: "$userName" },
            rate: { $first: "$rate" },
          }
        },
      ]).next(callback)
  },

  rateArtist: async function (artistId, userName, rate, callback) {
    const collection = await client.getCollection("ArtistsRates")

    console.log(`attempt of rating artist: ${artistId} by user: ${userName}`)

    collection.updateOne(
      {
        userName: userName,
        artistId: artistId,
      },
      {
        userName: userName,
        artistId: artistId,
        rate: rate,
      },
      {
        upsert: true
      },
      callback
    )
  },

  getAverageArtistRate: async function (artistId, callback) {
    const collection = await client.getCollection("ArtistsRates")

    console.log(`getting average rate for artist: ${artistId}`)

    collection.aggregate(
      [
        {
          $match: { "artistId": `${artistId}` }
        },
        {
          $group: {
            _id: artistId,
            pop: { $avg: "$rate" }
          }
        },
      ]).next(callback)
  },


  getAllArtistsRatesForSpecificUser: async function (userName, callback) {
    const collection = await client.getCollection("ArtistsRates")

    collection.aggregate(
      [ { $match : { userName : `${userName}` } } ]
    ).toArray().then(callback)
  },
};

exports.client = client;
