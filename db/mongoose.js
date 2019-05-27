const mongoose = require('mongoose');

let mongoUrl = 'mongodb://127.0.0.1:27017/Bloggy';
if(process.env.MONGO_URI) {
    mongoUrl = process.env.MONGO_URI;
}

mongoose.connect(mongoUrl, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;