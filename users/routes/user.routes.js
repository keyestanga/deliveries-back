const { Router } = require("express");
const router = Router();
const usersController = require("./../controllers/user.controller");

// Routes Products
router.post('/register-user',usersController.registerUser);
router.post('/login-user',usersController.loginUser);
router.put('/upload/user-pic',usersController.uploadUserPic);

module.exports = router;

