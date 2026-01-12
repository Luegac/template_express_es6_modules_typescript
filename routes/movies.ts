import express, { type Request, type Response } from "express";
import { movies } from "./data.js";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
    res.json(movies);
});

router.get("/genres", (_req: Request, res: Response) => {
    const genreSet = new Set<string>();
    for (const m of movies) {
        m.genre.forEach(g => genreSet.add(g));
    }
    const allGenres = Array.from(genreSet);
    res.json(allGenres);
});

router.get( "/movie/:id", (_req: Request, res: Response) => {
    const id = Number(_req.params.id);
});

export default router;
