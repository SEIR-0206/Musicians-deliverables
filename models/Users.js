const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a name"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please provide the URL for an image"]
        },
        email: {
            type: String,
            required: [true, "Please providean email!"]
        }
    },
    {
        timestamps: true
    }
);