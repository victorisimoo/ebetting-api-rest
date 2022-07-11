import * as eventController from '../controllers/events.controller';
import {Router} from 'express';
const router = Router();

router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);
router.get('/:idEvent', eventController.getEventById);
router.put('/:idEvent', eventController.updateEventById);

export default router;
