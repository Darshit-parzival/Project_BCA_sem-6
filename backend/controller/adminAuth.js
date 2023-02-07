const Admin = require('../models/Admin');

exports.adminlogin = async (req, res) => {
    try {
        const emailAdmin = req.body.email;
        const Adminpwd = req.body.password;
        const admin = await Admin.findOne({ email: emailAdmin });
        if (admin === null)
            res.send("not")
        else {
            const { password, name } = admin._doc;
            (Adminpwd === password) ? res.send({ response: "correct", name }) : res.send({ response: "incorrect" })
        }
    } catch (error) {
        console.log(error)
    }
}