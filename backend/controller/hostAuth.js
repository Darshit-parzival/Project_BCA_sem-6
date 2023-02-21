const { default: mongoose } = require("mongoose")

exports.teamA = (req, res) => {
    try {
        // const ModelSchema = {
        //     schema: {
        //         name: String,
        //         roll: String,
        //         wicketkeeper: String,
        //         captain: String
        //     },
        // }
        // const {collection,data}= req.body
        console.log(req.body)
        // const mySchema = new mongoose.Schema(ModelSchema)
        // const DynamicModel = new mongoose.model(collection, mySchema)
        // const teamA = new DynamicModel(req.body)
        // teamA.save((err, doc) => {
        //     if (err) return console.error(err)
        //     res.send(doc)
        // })

    } catch (err) {
        console.log(err)
        res.send("error")
    }
    // console.log(req.body)
    // console.log(schema)

}