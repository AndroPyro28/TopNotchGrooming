const express = require("express");
const app = express();
const cors = require('cors');
const axios = require('axios')
const { Server } = require('socket.io');
require('dotenv').config({path: "./.env"})
const {verifyUser} = require('./middlewares/verifyUser');
const socketRoutes = require("./socket/socketRoutes");

app.use(express.json({limit:"50mb"}));

app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
}));

app.use(express.json())
const PORT = process.env.PORT || 3001;

app.use('/api/customer', require('./routes/customerRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/public', require('./routes/publicRoutes'));

const server = require('http').createServer(app);

// app.get('/', async (req, res) => {
//     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//     const paymentIntents = await stripe.paymentIntents.list({
//         limit: 1,
//       });
// console.log(paymentIntents)
// return res.json(paymentIntents)
// })

app.get('/api/auth', verifyUser, (req, res) => {
    try {
            return res.status(200).json({
                currentUser: req.currentUser,
                success: true,
            });
    } catch (error) {
        console.error(error);
    }
})

server.listen(PORT, () => console.info(`server listening on port -${PORT}`)) 
const io = new Server(server, { // we will use this later
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
    }
})

socketRoutes(io)