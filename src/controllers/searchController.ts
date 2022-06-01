import { Request, Response } from "express";
import { createMenuObj } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string

    if (!query) {
        res.redirect('/')
        return
    }

    res.render('pages/home', {
        active: createMenuObj('all'),
        query,
        data: Pet.getName(query)
    });
}