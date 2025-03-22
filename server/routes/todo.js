import express from "express"
import { verifyToken } from "../utils/verify.js";
import { getAllTodos,addTodo, getTodo, updateTodo, deleteTodo } from '../controllers/todo.js';
const router = express.Router();

router.get("/", verifyToken, getAllTodos);

router.post("/", verifyToken, addTodo);

router.put("/:id",verifyToken ,updateTodo);

router.get("/:id", verifyToken, getTodo);

router.delete("/:id", verifyToken, deleteTodo);

export default router;