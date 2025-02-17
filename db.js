const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' 

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