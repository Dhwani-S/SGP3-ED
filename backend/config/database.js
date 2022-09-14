const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch((err)=>{
    console.log(err)
  });
}

module.exports = connectDatabase;