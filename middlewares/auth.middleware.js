const authRequire = (req, res, next) => {
    const body = req.body;

    if(body.username !== "Ellen" || body.password !== "secret") {
        return res.send("Invalid Credentials");
    };
    next();
}

module.exports = {authRequire};