import { Router } from 'express'
import car from './car'

const router = new Router()



router.use('/cars', car)



export default router
