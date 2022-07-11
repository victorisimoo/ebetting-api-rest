import * as eventController from '../controllers/events.controller';
import {Router} from 'express';
const router = Router();

router.post('/', eventController.createEvent);
router.get('/:idEvent', eventController.getEventById);
router.put('/:idEvent', eventController.updateEventById);
router.delete('/:idEvent', eventController.deleteEventById);

export default router;