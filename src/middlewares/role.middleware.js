const adminValidate = (req, res, next) => {
    const role = req.user.role

    return role === 'elPA1r3Y'
        ? next()
        : res.status(401).json({ message: 'Acces denied!' })
}

module.exports = adminValidate