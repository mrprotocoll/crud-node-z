const mongoose = require("mongoose");
var Student = require("./model");

exports.add = (req,res)=>{
    if(!req.body){
        var msg = "All fields are Required";
        res.send({message:msg})
        return;
    }

    // create 
    const std = new Student({
        name    : req.body.name,
        email   : req.body.email,
        dob     : req.body.dob,
        country : req.body.country,
    })

    if(!std.name || !std.email || !std.country){
        var msg = "All fields are Required";
        res.send({message:msg})
        return;
    }
    
    std
    .save(std)
    .then(data =>{
        var msg = "New Student Record Added Successfully";
        res.send({message: msg, data: data});
    }).catch(err=>{
        var msg = `Could not Add Student, Error Occured`;
        res.status(400).send({message:msg});
    })
}

exports.getAll = (req,res)=>{
    Student.find()
    .then(data =>{
        var msg = `All Students Record`;
        res.send(`<h2>${msg}</h2><pre style='font-size:16px'> ${data}</pre>`);
    }).catch(err=>{
        var msg = `Could not get Student Records, Error Occured:`;
        res.status(404).send({message:msg});
    })
};

exports.update = (req,res)=>{
    if(!req.body){
        var msg = "All fields are Required";
        res.send({message:msg})
        return;
    }
    let id = req.params.id
    Student.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            var msg = `No Record Found for Student with Id ${id}`;
            res.send({message:msg});
        }else{
            res.send(data);
        }
    }).catch(err=>{
        var msg = `Could not Update Student Info, Error Occured`;
        res.send({message:msg});
    })
}

exports.getById = (req,res)=>{
    let id = req.params.id
    Student.findById(id)
    .then(data =>{
        if(!data){
            var msg = `No Record Found for Student ${id}`;
            res.send({message:msg});
        }else{
            res.send(data);
        }
    }).catch(err=>{
        var msg = `Could not get Student of id ${id}, Error Occured`;
        res.send({message:msg});
    })
}

exports.delete = (req,res)=>{
    let id = req.params.id
    Student.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            var msg = `Failed to Delete Record: ${id}`;
            res.send({message:msg});
        }else{
            var msg = `Student Record Successfuly Deleted : ${id}`;
            res.send({message:msg});
        }
    }).catch(err=>{
        var msg = `Could not Delete Student of id ${id}, Error Occured`;
        res.send({message:msg});
    })
}