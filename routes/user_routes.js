const express=require('express')
const UserController=require('../http/controllers/UserController')
const router=express.Router()

router.post('/register',async (req,res)=>{
    UserController.RegisterUser(req,res);
})

router.post('/login',async (req,res)=>{
    UserController.LoginUser(req,res);
})

router.post('/addEmployee',async (req,res)=>{
    UserController.addEmployee(req,res);
})

router.get('/getEmployee/:empemail',async (req,res)=>{
    UserController.getEmployee(req,res);
})

module.exports=router