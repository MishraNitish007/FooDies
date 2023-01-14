const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require("jsonwebtoken");

const bcrypt =require("bcryptjs");

const jwtSecret = "ThisWebsiteismadeByMernStacktechnologies1$# "

router.post("/createUser", [
    body('email', 'Enter valid Email').isEmail(),
    // password must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Used bcrypt js to hash password using salt 
const salt = await bcrypt.genSalt(10);
let secPassword= await bcrypt.hash(req.body.password,salt)

        try {
            await user.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            }).then(res.json({ success: true }));

        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })



router.post("/loginUser", [
    body('email', 'Enter valid Email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {

            // This userdata will give whole user data of in json so we can velidate password also 
            let userData = await user.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try Loggin with Correct Credentials " });

            }

            
             const passwrd= await bcrypt.compare(req.body.password,userData.password)
            if (!passwrd) {
                return res.status(400).json({ errors: "Try Loggin with Correct Credentials " });

            }

            // Getting data from user data ,creating  a data object  and taking id from  mongodb from database and and passing data and jwt secret sign in authtoken header , data ,jwtSecret 

            const data ={
                user:{
                    id:userData.id
                }
            }

            const authToken =jwt.sign(data,jwtSecret)

            return res.json({ success: true,authToken:authToken });


        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })


module.exports = router;