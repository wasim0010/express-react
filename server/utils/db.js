const mongoose = require("mongoose")
 
const connectDB = async() =>{
  try {
   await mongoose.connect("mongodb+srv://wasimkhanhu7853:6OEM3QJOGlfvLLPO@cluster0.5uyyxo0.mongodb.net/")
    .then(console.log("mongo db is connected" ))
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = connectDB