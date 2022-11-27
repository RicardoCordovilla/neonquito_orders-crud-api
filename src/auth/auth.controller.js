// Email  y contraseña del user

// el email es unique en la db

const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require('../utils/crypto')

const loginUser = async (email, password) => {
    try {
        const data = await getUserByEmail(email)
        const verifyPass = comparePassword(password, data.password)
        return verifyPass ? data : false
    }
    catch {
        return false
    }
}

module.exports = {loginUser}
