const express = require("express");
const path = require("path");
const bodyParser =  require("body-parser");
const conn =  require("./inc/conn");
const ctrl =  require("./inc/controller");

//connect to DB
conn();
const app = express(); 

app.use("/css",express.static(path.resolve(__dirname,"public/css")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/",ctrl.add)
app.get("/",ctrl.getAll)
app.get("/:id",ctrl.getById)
app.put("/:id",ctrl.update)
app.delete("/:id",ctrl.delete)


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is Running on port ${PORT}`);
})