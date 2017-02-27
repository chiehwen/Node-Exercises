const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Configure app for bodyParser()
// lets us grab data from the body of POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup port for server to listen on
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/helloapi");

// API Routes
const router = express.Router();

// Routes will all be prefixed with /api
app.use("/api", router);

// Test Router
router.get("/", (req, res) => {
    res.json({Message: "Welcome to our API!" });
});

// Fire up server
app.listen(port);
// Print friendly message to console
console.log("Server listening on port " + port);