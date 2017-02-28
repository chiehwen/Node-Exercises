import mongoose from "mongoose";
import { Router } from "express";
import Restaurant from "../model/restaurant";

export default({ config, db }) => {
    let api = Router();

    // Create - "/v1/restaurant/add"
    api.post("/add", (req, res) => {
        let newRest = new Restaurant();
        newRest.name = req.body.name;
        
        newRest.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.json({ Message: "Restaurant saved succesfully" });
            }
        });
    });

    // Read - "/v1/restaurant"
    api.get("/", (req, res) => {
        Restaurant.find({}, (err, restaurants) => {
            if (err) {
                res.send(err);
            } else {
                res.json(restaurants);
            }
        });
    });

    // Read by id - "/v1/restaurant/:id"
    api.get("/:id", (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            } else {
                res.json(restaurant);
            }
        });
    });

    // Update - "/v1/restaurant/:id"
    api.put("/:id", (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            } else {
                restaurant.name = req.body.name;
                restaurant.save((err) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.json({ Message: "Restaurant Info Updated." })
                    }
                });
            }
        });
    });

    // Delete - "/v1/restaurant/:id"
    api.delete("/:id", (req, res) => {
        Restaurant.findByIdAndRemove(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            } else {
                res.json({ Message: "Rastaurant Succesfully Removed."})
            }
        })
    })

    return api;

}