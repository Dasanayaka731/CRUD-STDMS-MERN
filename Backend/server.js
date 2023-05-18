//import neccessary packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//8070 port eken open krnn ehem berinm current thiyena port ekakin open krnn
const port = process.env.port || 8070;

//Used cors dependency
app.use(cors());
//used body parser dependency
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopologyL: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

//Routs folder eke thiyena student.js file eka import krgena variyable ekakata assign kr gnnw
const studentRouter = require("./routes/students");
//Express use krl ekata URL ekak hadagena access krnw
app.use("/student", studentRouter);
