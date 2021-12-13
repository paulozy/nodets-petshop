import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet'

export const homeController = (req: Request, res: Response) => {

  let listPets = Pet.getAllPets()

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      bg: 'allanimals.jpg'
    },
    listPets
  })
}

export const dogsController = (req: Request, res: Response) => {

  let listPets = Pet.getPetByType('dog')

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      bg: 'banner_dog.jpg'
    },
    listPets
  })
}

export const catsController = (req: Request, res: Response) => {

  let listPets = Pet.getPetByType('cat')

  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      bg: 'banner_cat.jpg'
    },
    listPets
  })
}

export const fishesController = (req: Request, res: Response) => {

  let listPets = Pet.getPetByType('fish')

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      bg: 'banner_fish.jpg'
    },
    listPets
  })
}
