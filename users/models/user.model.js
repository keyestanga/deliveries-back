'use strict'

const {  Schema, model } = require("mongoose");

const usersSchema = new Schema({
        
    name: String,
    username:String,
    user_image:String,
    email:String,
    password:String
},{versionKey:false})

usersSchema.set('toJSON',{virtuals:false});

const Users = model('users',usersSchema,'users');


exports.loginUser = (info)=>{
    return new Promise((resolve,reject)=>{    
        Users.find({$or:[{email:info.eou},{username:info.eou}],password:info.password},{password:0}).exec((error,result)=>{    
            if(error){
                reject(error.message);
                 throw error.message;
            } 
            if(result){ 
                console.log(result);   
            }else{
                resolve(result);
            }
        })
    }).catch(error=>{
        throw error.message;
    })  
}


exports.registerUser = (user)=>{
    try{
        const usr = new Users.save(user);
    }catch(error){
        throw error.message
    }   
}

exports.updateUserPic = (userid,picname)=>{
    return new Promise((resolve,reject)=>{
        findOneAndUpdate({_id:userid},{$set:{user_image:picname}},{new:true}).exec((error,user)=>{    
            if(error){
                reject(error.message);
                throw error.message;         
            }  
            if(user){  
            }else{
                resolve(undefined);
            }
        })
    }).catch(error=>{
        throw error.message;
    })

}


