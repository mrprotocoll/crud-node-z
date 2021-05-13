const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        require:true,
        type: String
    },
    email: {
        require:true,
        type: String,
        unique: true
    },
    country: {
        require:true,
        type: String
    },
    dob:{
        require:true,
        type: Date
    }
})

const Students = mongoose.model("students",schema);
module.exports = Students;