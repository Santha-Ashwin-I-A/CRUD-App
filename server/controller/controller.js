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
        status:req.body.status
    })
    //save data in database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message ||"some error occured while creating a create operation"
            });
        })
}

//retrieve and return all users//retrieve and a single user
exports.find =(req,res)=>{

}

//update a new identified user by userid
exports.update =(req,res)=>{

}

//Delete a user with the userid
exports.delete =(req,res)=>{

}