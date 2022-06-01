import { Request, Response } from "express";
import { createMenuObj } from "../helpers/createMenuObject";
import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        active: createMenuObj('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        data: Pet.getAll()
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/home', {
        active: createMenuObj('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        data: Pet.getType('dog')
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/home', {
        active: createMenuObj('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
        },
        data: Pet.getType('cat')
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/home', {
        active: createMenuObj('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        data: Pet.getType('fish')
    });
}