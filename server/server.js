const express = require("express");
const app = express();
const cors = require('cors');
const { Server } = require('socket.io');
const { connectDB } = require("./config/connectDB");
const Customer = require("./models/User");
require('dotenv').config({path: "./credentials.env"})

const server = require('http').createServer(app);

app.use(express.json({limit:"50mb"}));

app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
}));

app.use(express.json())

const PORT = process.env.PORT || 3001;

app.use('/api/customer', require('./routes/customerRoutes'))

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

const io = new Server(server, { // we will use this later
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
    }
})

