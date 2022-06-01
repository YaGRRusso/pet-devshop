import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('Olá Mundo')
}

export const dogs = (req: Request, res: Response) => {
    res.send('Olá DOGS')
}

export const cats = (req: Request, res: Response) => {
    res.send('Olá CATS')
}

export const fishes = (req: Request, res: Response) => {
    res.send('Olá FISHES')
}