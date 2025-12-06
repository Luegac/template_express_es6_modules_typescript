// src/routes/users.ts
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.json({ users: [] });
});

export default router;