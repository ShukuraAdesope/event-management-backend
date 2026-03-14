const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.post("/", async(req,res)=>{

const event = new Event(req.body);

await event.save();

res.json(event);

});

router.get("/", async(req,res)=>{

const events = await Event.find();

res.json(events);

});

router.get("/:id", async(req,res)=>{

const event = await Event.findById(req.params.id);

res.json(event);

});

router.put("/:id", async(req,res)=>{

const event = await Event.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(event);

});

router.delete("/:id", async(req,res)=>{

await Event.findByIdAndDelete(req.params.id);

res.json({message:"Event deleted"});

});

module.exports = router;