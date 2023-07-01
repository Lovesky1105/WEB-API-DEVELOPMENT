const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
        name:String,
        email:String,
        password:String,

    })
   const userModel = mongoose.model("users", UserDetailsSchema)
   module.exports = userModel