const mongoose = require('mongoose');

const musiciansSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required : [true, "Please provide a name"]
    },
    image: {
        type: String,
        required : [true, "Please provide the URL for an image"]
    },
    instrument: {
        type: String,
        default: "Guitar"
    }
},
{
    timestamps: true
}
);