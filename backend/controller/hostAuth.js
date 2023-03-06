const { default: mongoose } = require("mongoose")

exports.teamName = (req, res) => {

    const { schema, collection } = req.body;

    const mySchema = new mongoose.Schema(schema);

    const MyDynamicModel = mongoose.model(collection, mySchema);

    const myDynamicDoc = new MyDynamicModel(req.body);

    myDynamicDoc.save((err, doc) => {
        if (err) return res.send("Not");
        res.send("success")
    });

    console.log(req.body)
}

exports.playerNameA = async (req, res) => {

}

exports.playerNameB = (req, res) => {

    console.log(req.body)
        res.send("Two")

}