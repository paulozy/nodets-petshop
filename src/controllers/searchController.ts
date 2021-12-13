import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const searchController = (req: Request, res: Response) => {

  let query = req.query.q as string

  if(!query) {
    res.redirect('/')
    return
  }

  let listPets = Pet.getPetByName(query)

  res.render('pages/page', {
    menu: createMenuObject(''),
    listPets,
    query
  })
}