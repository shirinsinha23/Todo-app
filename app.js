const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Hello from Todo App");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  todos.push({ id: Date.now(), task, done: false });
  res.json({ msg: "Task added" });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.json({ msg: "Task deleted" });
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
