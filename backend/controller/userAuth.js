const User = require('../models/User');

exports.userlogin = async (req, res) => {
    try {
        const emailUser = req.body.email;
        const pwd = req.body.password;
        const user = await User.findOne({ email: emailUser });
        if (user === null)
            res.send("not")
        else {
            const { password, name } = user._doc;
            (pwd === password) ? res.send({ response: "correct", name }) : res.send({ response: "incorrect" })
        }
    } catch (error) {
        console.log(error)
    }
}

exports.userregistration = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        if (await user.save()) {
            res.send("User Created Successfully");
        }
    } catch (err) {
        res.send("User does not created successfully");
        console.log(err);
    }
}