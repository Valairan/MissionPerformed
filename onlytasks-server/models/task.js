const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["To Do", "In Progress", "Done"], default: "To Do" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Task", TaskSchema);
