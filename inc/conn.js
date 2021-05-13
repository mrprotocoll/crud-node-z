const mongoose = require("mongoose");

const conn = async ()=>{
    try {
        const connString = "mongodb+srv://dami:dami@cluster0.qs99i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const con = await mongoose.connect(connString,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("Connected "+`Host: ${con.connection.host}`)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = conn;