// esto es para proteger rutas

const { jwtSecret } = require('../config')
const { getUserById } = require('../users/users.controllers')

// 1. Revisar si existe un token
// 2. verificar si el token pertenece a un usuario valido
// 3. Modificar el req y agregar req.user con la informacion desencriptada del token

// passport maneha las diferentes estrategias para auth like (googl, facebook, auth0,...)
const JwtStrategy = require('passport-jwt').Strategy

// el header es el token, passport-jwt extrae los headers de la petición
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = (passport) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async (decoded, done) => {
            try {
                const response = await getUserById(decoded.id)
                if (!response) {
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
            // done(error,decoded)
        })
    )
}
