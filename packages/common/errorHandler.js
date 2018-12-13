module.exports = (err, req, res) => {
    console.log(err.stack)
    res.status(500).send("Oops! something's broken!")
}
