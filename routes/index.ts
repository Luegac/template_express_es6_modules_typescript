// src/routes/index.ts
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.json({ message: "Hello from index route" });
});

export default router;
