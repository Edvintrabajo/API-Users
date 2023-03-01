import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
  } from "../controllers/users.controller.js";

const router = Router();

// GET all Users
router.get("/users", getUsers);

// GET An User
router.get("/users/:id", getUser);

// DELETE An User
router.delete("/users/:id", deleteUser);

// INSERT An User
router.post("/users", createUser);

// UPDATE An User
router.patch("/users/:id", updateUser);

export default router;
