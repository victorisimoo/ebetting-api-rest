import * as eventController from '../controllers/events.controller';
import {Router} from 'express';
import {verifyToken} from '../middlewares/authjwt';

const router = Router();
router.get('/', verifyToken, eventController.getEvents);
router.post('/', verifyToken, eventController.createEvent);
router.get('/:idEvent', eventController.getEventById); 
router.put('/:idEvent', verifyToken, eventController.updateEventById);

export default router;
