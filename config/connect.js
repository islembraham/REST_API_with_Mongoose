const mongoose=require("mongoose")
const config=require("config")

const connect = async () => {
    try {
        mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useUnifiedTopology: true }),
            () => console.log("mongoose is connected")
    } catch (error) {
        console.log(error)
    }

}

module.exports = connect