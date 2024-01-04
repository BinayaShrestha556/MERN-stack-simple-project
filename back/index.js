//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const bookRoute = require('./routes/bookRoute.js')

//initialaization

const app = express();
app.use(express.json());
app.use(cors())

//port
const port = 3000;
//db url
const dbUrl =
  "mongodb+srv://Binaya:Binaya@database.impyte5.mongodb.net/?retryWrites=true&w=majority";

//book routes
app.use('/books',bookRoute);


//db connection
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log("online");
    });
  })
  .catch((err) => {
    console.log(err);
  });


