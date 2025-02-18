const mongoose = require('mongoose');
require('dotenv').config();
//Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Server');
})

db.on('error', (err) => {
    console.log('MongoDB Connection Error', err);
})

db.on('disconnected', () => {
    console.log('disconnected to MongoDB Server');
})

// Export the database connection
module.exports = db;