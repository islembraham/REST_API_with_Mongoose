const mongoose = require ('mongoose')
const schema=mongoose.Schema

const person= new schema({
    name : {type : String, required:true},
    age : {type : Number},
    favoriteFoods : {type : Array},
})

module.exports= Person= mongoose.model("person", person)