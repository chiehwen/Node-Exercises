import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: { type: String }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);