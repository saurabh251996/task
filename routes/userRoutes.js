// const express=require('express')
// const Router=express.Router()
// // const Router=express.Router()

const userController=require('../controller/userController')
// Router.post('/login',userController.signUp)
// Router.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });
// module.exports=Router

var express = require('express');
var Router = express.Router();
Router.post('/createApi',userController.createApi)
/* GET users listing. */
// router.get('/', function(req, res, next) 
//   res.send('respond with a resource');
// });

module.exports = Router;