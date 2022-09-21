import express, { Router } from "express";
import { getTodos } from "../modules/getTodos.js";
import { postTodos } from "../modules/postTodos.js";

const tasksRouter = express.Router();

tasksRouter.get("/TodoApp", async function (req, res) {
    console.log("router started") 
    const result = await getTodos();
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });

  tasksRouter.post("/NewTodoApp", async function (req, res) {
    console.log("router started") 
    let task = req.body;
    const result = await postTodos(task);
    const responseObject = { success: true, payload: result };
    res.json(responseObject);
  });

  export default tasksRouter;