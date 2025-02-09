require("dotenv").config();
const mongoose = require("mongoose");

const getConnection = async () => {
     try {
          
          await mongoose.connect(process.env.MONGO_URI)
               .then(() => {
                    console.log("Connection Successfully. ");
               })

     } catch (e) {

          console.log("Internal Server Error : ", e);

     }
}

module.exports = getConnection;