const {
    MongoClient
} = require('mongodb');
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;
const dbName = "cars"

module.exports = {
    con:  (callback) => {
        client.connect( (err, db) => {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db(dbName);
            // dbConnection.collection('users').find().toArray()
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },
};