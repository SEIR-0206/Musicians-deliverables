const mongoose = require('mongoose');

const snowboardersController = new mongoose.Schema(
    {
        // name field is required to be a string
        name: {
            type: String,
            required: [true, "Please provide a name"]
        },
        // image field is a string and it's both required and it has to be unique
        image: {
            type: String,
            required: [true, "Please provide the URL for an image"]
        },
        // This is saying instrument is not a required field but if it's entered, it'll be a string
        boards: {
            type: String,
            default: "Burton"
        }
    },
    {
        timestamps: true
    }
);