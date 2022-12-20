const Settings = require('@overleaf/settings')
const { MongoClient, ObjectId } = require('mongodb')

const mongoClient = new MongoClient(Settings.mongo.url)
const mongoDb = mongoClient.db()

const db = {
  notifications: mongoDb.collection('notifications'),
}

module.exports = {
  db,
  mongoClient,
  ObjectId,
}
