const express = require("express"); // import Express Module
const app = express(); // initiliasze express app
const mongoose = require("mongoose"); // import Mongose module
require("dotenv/config"); // import DotEnv Module
const bodyParser = require("body-parser"); // import Body-parser module
const cors = require("cors"); // Import Cors module

//MiddleWares
app.use(cors());
app.use(bodyParser.json());
// Imports Routes
const productsRoute = require("./Routes/products");

app.use("/products", productsRoute);

//Port
const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req, res) => {
    res.send("Welcome, to our Restfull API");
});

// Contect to DataBase
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connected to DB!");
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server listening at: localhost:${PORT}`);
});