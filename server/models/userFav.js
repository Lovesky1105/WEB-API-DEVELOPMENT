const mongoose = require("mongoose");

const UserFavSchema = new mongoose.Schema({
        favFood:String,
        favDrinks:String
        

    })
   const userFavModel = mongoose.model("web_apis", UserFavSchema)
   module.exports = userFavModel