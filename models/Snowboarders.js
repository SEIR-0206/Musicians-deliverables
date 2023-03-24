const mongoose = require('mongoose');

const snowboardersController = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"]
        },
        image: {
            type: String,
            required: [true, "Please provide the URL for an image"]
        },
        boards: {
            type: String,
            default: "Burton"
        }
    },
    {
        timestamps: true
    }
);