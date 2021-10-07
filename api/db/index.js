const mongoose = require('mongoose');


const DB_URI = process.env.MONGO_DB_CONNECTION || 'mongodb://localhost:27017/agrigest_db';

function connect() {
  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV === 'test') {
      const Mockgoose = require('mockgoose').Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage()
        .then(() => {
          mongoose.connect(DB_URI,
            { useNewUrlParser: true})
            .then((res, err) => {
              if (err) return reject(err);
              resolve();
            })
        })
    } else {
        mongoose.connect(DB_URI,
          { useNewUrlParser: true})
          .then((res, err) => {
            if (err) return reject(err);
            resolve(res);
          })
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };