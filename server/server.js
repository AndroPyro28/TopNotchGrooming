const express = require("express");
const app = express();
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config({path: "./.env"})
const {verifyUser} = require('./middlewares/verifyUser')

const server = require('http').createServer(app);

app.use(express.json({limit:"50mb"}));

app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
}));

app.use(express.json())

const PORT = process.env.PORT || 3001;

app.use('/api/customer', require('./routes/customerRoutes'))

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


app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

const io = new Server(server, { // we will use this later
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
    }
})

