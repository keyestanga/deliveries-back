'use strict'

const usersController = require('../controllers/user.controller');


exports.userRoutes = function(app){
    
    app.post('/api/register-user',usersController.registerUser);
    
    app.get('/api/login-user',usersController.loginUser); 

    app.put('/api/upload/user-pic',usersController.uploadUserPic);

    //app.delete('/api/delete-user',usersController.deleteUser);

}