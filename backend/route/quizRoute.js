const express=require('express');

const Quiz=require('../models/quiz');

const authLogin = require('../controller/authlogin.js');
const authSignup = require('../controller/authSignUp.js');
const router=express.Router();
const authVerify =require('../middleware/authVerify.js');
const category=require('../controller/category.js');
const RouteNotFound = require('../middleware/routeNotFound.js');


router.get('/quiz',authVerify,async (req,res)=>{
    const quizzes= await Quiz.find({});
    res.send(quizzes);  
})

router.get('/category',category);
router.post('/auth/login',authLogin);
router.post('/auth/signup',authSignup);

router.get('*',RouteNotFound);

module.exports = router;