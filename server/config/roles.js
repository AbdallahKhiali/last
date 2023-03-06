function admin(req, res, next) {
    if (!req.user[0].role) return res.status(403).send({ error: "Access denied." })
    if (req.user[0].role === "admin") {
        next();
    } else {
        return res.status(403).send({
            error: "Access denied."
        })
    }
}

function viewer(req, res, next) {
    if (!req.user[0].role) return res.status(403).send({ error: "Access denied." })
    if (req.user[0].role === "viewer" || "admin") {
        next();
    } else {
        return res.status(403).send({
            error: "Access denied."
        })
    }
}

module.exports = { admin, viewer };