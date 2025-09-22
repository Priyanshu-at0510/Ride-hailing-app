const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.error('DB connection error:', err));
}

module.exports = connectToDb;