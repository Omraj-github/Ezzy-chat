const mongoose=require("mongoose");

const connectDB = async() =>{
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI,{
            const conn = await mongoose.connect("mongodb://127.0.0.1:27017/ezzy-chat",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports=connectDB;