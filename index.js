const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute)

mongoose
    .connect(
        `mongodb+srv://${username}:${password}@backenddb.v5gexc3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`
    )
    .then(() => {
        console.log("Connected to database!")
        app.listen(PORT, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch(() => console.log("Connection failed!"));
