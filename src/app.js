const useRouter = require('./users/users.router')
const OrdersRouter=require('./orders/orders.router')

const cors = require('cors')

const db = require('./utils/database')

const authRouter = require('./auth/auth.router')
const initModels = require('./models/initiMoldes')


// Dependencias
const express = require('express')

// Configuraciones iniciales
const app = express()
app.use(express.json())

app.use(cors())

// importacion de archivos
const { port } = require('./config')


db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

initModels()



app.get('/', (req, res, next) => {
    console.log('se está ejecutando un middlewhhere', req.method)
    next()
}, (req, res) => {
    res.status(200).json({
        message: 'Ok!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', useRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/orders', OrdersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})