const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController.js");
const adminController = require("../controller/adminController.js");
const upload = require('../config/multer');
const userController = require('../controller/userController')

//index
router.get('/', indexController.index);




//admin
router.get('/admin', adminController.admin);

//user
router.get('/login', userController.users);
router.get('/register', userController.registration);

// Handle registration and login
router.post('/register', userController.registrationHandler);
router.post('/login', userController.loginHandler);




module.exports = router;