const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({

title: {
type: String,
required: true
},

description: {
type: String,
required: true
},

location: {
type: String
},

date: {
type: Date
},

status: {
type: String,
default: "Active"
},

createdBy: {
type: String
}

},{
timestamps:true
});

module.exports = mongoose.model("Event", eventSchema);