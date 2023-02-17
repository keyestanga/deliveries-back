'use strict'

const fs = require('fs');
const path = require('path');



let assetsdir = path.join(__dirname,'../../../rlp/src/assets/image')


exports.createDirectory = async(user)=>{

    try{

        const makedir = assetsdir+'/'+user._id;
        
        fs.mkdir(makedir,(error)=>{
            
            if(error){
                throw error.message
            }

            console.log('new directory created');                              
                  


        });        

        return true;

    }catch(error){
        throw error.message;
    }
    

}


exports.updateImageUserFile = async(id,nfile)=>{

    try{
        
        const direxist = assetsdir+'/'+id+'/';
        const dirput = assetsdir+'/'+id+'/'+nfile.name;
        
        if(fs.existsSync(direxist)){

            nfile.mv(dirput,(error)=>{
                if(error){
                    throw error.message;
                }
                console.log('file saved');
            }) 

        }        
        console.log('returning true');
        return true;

    }catch(error){
        throw error.message;
    }
    

}