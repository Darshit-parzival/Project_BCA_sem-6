const express = require('express');
const User = require('../models/User');
const Admin = require('../models/Admin');
const router = express.Router();

router.post('/userregister', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        if(await user.save()) {
            res.send("User Created Successfully");
        }
    } catch (err) {
        res.send("User does not created successfully");
        console.log(err);
    }
});

router.post('/userlogin', async (req, res) => {
try {
        const emailUser = req.body.email;
        const pwd = req.body.password;
        const user = await User.findOne({ email: emailUser });
        if (user === null)
            res.send("not")
        else {
            const { password,name } = user._doc;
            (pwd === password) ? res.send({response:"correct",name}) : res.send({response:"incorrect"})
        }
    } catch (error) {
        console.log(error)
    }
});

router.post('/adminlogin', async (req, res) => {
try {
        const emailAdmin = req.body.email;
        const Adminpwd = req.body.password;
        const admin = await Admin.findOne({ email: emailAdmin });
        if (admin === null)
            res.send("not")
        else {
            const { password,name } = admin._doc;
            (Adminpwd === password) ? res.send({response:"correct",name}) : res.send({response:"incorrect"})
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = router