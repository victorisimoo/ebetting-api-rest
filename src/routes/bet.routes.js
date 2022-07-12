import * as betController from '../controllers/bet.controller';
import {Router} from 'express';
import {verifyToken} from '../middlewares/authjwt';

const router = Router();
router.get('/', betController.getBets);
router.post('/', verifyToken, betController.createBet);
router.put('/:idBet', betController.updateBetById);

export default router;