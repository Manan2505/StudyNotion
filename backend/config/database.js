const mongoose = require("mongoose");
require("dotenv").config()

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`)
      console.log(err)
      process.exit(1)
    })
}
