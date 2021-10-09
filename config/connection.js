const Mongoose = require('mongoose').config();

let mongoose;

if (process.env.JAWSDB_URL) {
    mongoose = new Mongoose(process.env.JAWSDB_URL);
} else {
    mongoose = new Mongoose(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mongoose',
        port: 3306
    });
}

module.exports = mongoose; 