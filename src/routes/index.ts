import { Router } from 'express'
import { catsController, dogsController, fishesController, homeController } from '../controllers/pageController'
import { searchController } from '../controllers/searchController'

const router = Router()

router.get('/', homeController)
router.get('/dogs', dogsController)
router.get('/cats', catsController)
router.get('/fishes', fishesController)

router.get('/search', searchController)

export default router