const urlModel = require("../models/urlModel")
var shortlink = require('shortlink');

async function generateUrl(req, res) {
    if (!req.body.url) return res.status(400).json({ message: "url is require" })
    const data = await urlModel.create({
        shortId: shortlink.generate(req.body.url),
        redirectUrl: req.body.url,
        visitHistory: []
    })
    return res.status(200).json({ data: data })
}
module.exports = { generateUrl }