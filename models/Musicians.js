const mongoose = require('mongoose')

const musiciansSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true,  "Insurt a Name"]
            },
        img: {
            type: String,
            required: [true, "Insurt a URL"]
        },
        instrument: {
            type: String,
            default: "Piano"
        }
    },
    {
        timestamps: true
    }
);

const Musicians = mongoose.model('Musicians', musiciansSchema);

module.exports = Musicians;