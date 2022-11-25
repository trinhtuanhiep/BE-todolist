const moogoose = require('mongoose')
const newSchema = new moogoose.Schema({
    name: {
        type: String
    }
})


module.exports = moogoose.model("student", newSchema)