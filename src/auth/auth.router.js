// Auth va a contener las rutas de autorizacion y autenticacion
// Login
// Register
// Recovery Password
// Virified user

const router =require('express').Router()

const {application}=require('express')
const  {registerUser}=require('../users/users.services')
const {login}=require('./auth.services')

// api/v1/auth

router.post('/register', registerUser)
router.post('/login',login)


module.exports = router
