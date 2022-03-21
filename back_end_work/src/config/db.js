const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.databaseurl);
module.exports = () => {
  return mongoose.connect(process.env.databaseurl);
};

//mongodb+srv://healthkart:healthkart@cluster0.g73qa.mongodb.net/HealthKart
//mongodb+srv://abarik:abarik_123@cluster0.tlmpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
