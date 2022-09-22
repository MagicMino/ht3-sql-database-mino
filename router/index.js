import express, { Router } from "express";
import { getTodos } from "../modules/getTodos.js";
import { postTodos } from "../modules/postTodos.js";
import { deleteTodos } from "../modules/deleteTodos.js";
import { updateTodos } from "../modules/updateTodos.js";

const tasksRouter = express.Router();

tasksRouter.get("/TodoApp", async function (req, res) {
    console.log("router started") 
    const result = await getTodos();
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });

  tasksRouter.post("/NewTodoApp", async function (req, res) {
    console.log("router started") 
    let task = req.body.task;
    const result = await postTodos(task);
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });

  tasksRouter.delete("/:id", async function (req, res) {
    console.log("router started") 
    let task = req.params.id;
    const result = await deleteTodos(task);
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });

  tasksRouter.put("/:id", async function (req, res) {
    console.log("router started") 
    let id = req.params.id;
    let task = req.body.task;
    const result = await updateTodos(task, id);
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });


  export default tasksRouter;