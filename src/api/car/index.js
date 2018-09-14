import { Router } from 'express'
import { create, amount } from './controller'

const router = new Router()

/**
 * @api {post} /cars Create car
 * @apiName CreateCar
 * @apiGroup Car
 * @apiSuccess {Object} car Car's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Car not found.
 */
router.post('/',
  create);

router.get('/amount',
  amount);

export default router
