const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Vehicle = require("./app/models/vehicle");

const app = express();

// Configure app for bodyParser()
// lets us grab data from the body of POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup port for server to listen on
const port = process.env.PORT || 3000;

// Use native promises
mongoose.Promise = global.Promise;
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vehicle-api");

// API Routes
const router = express.Router();

// Routes will all be prefixed with /api
app.use("/api", router);

// Middleware
// Middleware to use for all requests. Middleware can be very useful for doing vlidations.
router.use( (req, res, next) => {
    console.log("There is some processing currently going down...");
    next();
});

// Test Router
router.get("/", (req, res) => {
    res.json({Message: "Welcome to our API!" });
});

router.route("/vehicles")

    .post((req, res) => {
        // New instance of a vehicle
        const vehicle = new Vehicle();
        vehicle.make = req.body.make;
        vehicle.model = req.body.model;
        vehicle.color = req.body.color;
        vehicle.year = req.body.year;

        vehicle.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    message: "Vehicle was successfully manufactured"
                });
            }
        });
    })

    .get((req, res) => {
        Vehicle.find((err, vehicles) => {
            if (err) {
                res.send(err);
            } else {
                res.json(vehicles);
            }
        });
    });

router.route("/vehicle/:vehicle_id")
    .get((req, res) => {
        Vehicle.findById(req.params.vehicle_id, (err, vehicle) => {
            if (err) {
                res.send(err);
            } else {
                res.json(vehicle);
            }
        });
    });

router.route("/vehicle/make/:make")
    .get((req, res) => {
        Vehicle.find({
            make: req.params.make
        }, (err, vehicle) => {
            if (err) {
                res.send(err);
            } else {
                res.json(vehicle);
            }
        });
    });

router.route("/vehicle/color/:color")
    .get((req, res) => {
        Vehicle.find({
            color: req.params.color
        }, (err, vehicle) => {
            if (err) {
                res.send(err);
            } else {
                res.json(vehicle);
            }
        });
    });

router.route("/vehicle/year/:year")
    .get((req, res) => {
        Vehicle.find({
            year: req.params.year
        }, (err, vehicle) => {
            if (err) {
                res.send(err);
            } else {
                res.json(vehicle);
            }
        });
    });

// Fire up server
app.listen(port);
// Print friendly message to console
console.log("Server listening on port " + port);