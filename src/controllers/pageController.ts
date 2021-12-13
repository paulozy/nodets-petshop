import { Request, Response } from 'express';

export const homeController = (req: Request, res: Response) => {
  res.send('pages/page')
}

export const dogsController = (req: Request, res: Response) => {
  res.send('pages/page')
}

export const catsController = (req: Request, res: Response) => {
  res.send('pages/page')
}

export const fishesController = (req: Request, res: Response) => {
  res.send('pages/page')
}
