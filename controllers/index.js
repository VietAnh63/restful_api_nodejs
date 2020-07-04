const mongoose = require("mongoose")
const Admin = mongoose.model("Admin");

//Simple version, without validation or sanitation
module.exports.test = function(req, res) {
    res.send('test controller activate');
};


//get
module.exports.getAdmin = async function(req, res) {
    const Admins = await Admin.find()
    res.send(Admins)
}


//post
module.exports.addAdmin = async function(req, res) {
    const admin = new Admin({
        admin_mail: req.body.mail,
        admin_fullname: req.body.fullname,
        admin_pass: req.body.pass,
        admin_level: req.body.level
    })

    await admin.save(function(err) {
        if (err) {
            console.log(err);

        }
        res.send("Villa999 add admin successfully !")

    })
}

//put
module.exports.updateAdmin = async function(req, res) {
    const { id } = req.params
    const updateAdmin = {
        admin_mail: req.body.mail,
        admin_fullname: req.body.fullname,
        admin_pass: req.body.pass,
        admin_level: req.body.level
    }

    await Admin.updateOne({ _id: id }, { $set: updateAdmin }, function(err) {
        if (err) {
            console.log(err);
        }
        res.send("Villa999 upadte amin succesfully !")
    })

}

//delete
module.exports.destroy = async function(req, res) {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.send("Id not validate!")
    }
    await Admin.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log(err);
        }
        res.send("Villa999 delete admin successfully !")
    })
}