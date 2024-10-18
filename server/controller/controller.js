const Userdb = require('../model/model');
var userdb = require('../model/model');

//create and save new user
exports.create =(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    //new user
    const user = new userdb({
        name:req.body.name,
        email: req.body.email,
        gender:req.body.gender,
        Status:req.body.status
    })
    //save data in database
    user
        .save(user)
        .then(data=>{
            //res.send(data)
             res.redirect('/add-user');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message ||"some error occured while creating a create operation"
            });
        })
}

//retrieve and return all users//retrieve and a single user
exports.find =(req,res)=>{
    userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.send(500).send({message:err.message||"Error occured when get users"})
    })
    
}

exports.findOne =(req,res) =>{
    const id = req.params.id;
    userdb.findById(id)
    .then(data=>{
        if(!data){
            res.send(404).send({message:`Cannot find user with ${id}.Maybe user not find`})
        }else{
            res.send(data)
        }
    })
}

//update a new identified user by userid
exports.update =(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    
    const id =req.params.id;
    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.send(404).send({message:`Cannot update user with ${id}.Maybe user not find`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.send(500).send({message:"Error update user"})
    })
}

//Delete a user with the userid
exports.delete =(req,res)=>{
    const id = req.params.id;

    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete ${id} .Maybe id is wrong`});
        }else{
            res.send({
                message:"User Was Deleted"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete user with id ="+id
        })
    })
}