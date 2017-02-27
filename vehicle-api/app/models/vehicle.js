const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    make: { type: String },
    model: { type: String },
    color: { type: String },
    year: { type: Number }
});

module.exports = mongoose.model("Vehicle", VehicleSchema);