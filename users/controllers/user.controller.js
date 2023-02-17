'use strict'
const usersModel = require('../models/user.model');
const userFileModel = require('../models/userfile.model');

const usersController = {};

usersController.registerUser = async (req, res, next) => {
  try {
    const user = await userFileModel.createDirectory();
    res.json(user);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

usersController.loginUser = async (req, res, next) => {
    console.log('ruta loginUser '+req.body)
    try {
      const user = await userFileModel.createDirectory(req.body);
      res.send(user).status(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
  };
  usersController.uploadUserPic = async (req, res, next) => {
    console.log('ruta uploadUserPic')
    try {
    //   const user = await userFileModel.createDirectory();
      res.status(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
  };


module.exports = usersController;