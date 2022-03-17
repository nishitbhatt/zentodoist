const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    note: String,
    status: Boolean,
    price: Number
});

const TodoModel = new mongoose.model("tasks", todoSchema);
module.exports = TodoModel;