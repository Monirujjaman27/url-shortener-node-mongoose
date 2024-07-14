const mongoos = require("mongoose")
const urlSchema = new mongoos.Schema(
    {
        shortId: {
            type: String,
            require: true,
            unique: true
        },
        redirectUrl: {
            type: String,
            require: true,
        },
        visitHistory: [{ timestamp: { type: Number } }],
    }
);
const urlModel = mongoos.model('url', urlSchema)
module.exports = urlModel