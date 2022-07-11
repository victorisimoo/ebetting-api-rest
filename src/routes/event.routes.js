import * as eventController from '../controllers/events.controller';
import {Router} from 'express';
import { route } from 'express/lib/application';
const router = Router();

router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);
router.get('/:idEvent', eventController.getEventById);
router.put('/:idEvent', eventController.updateEventById);

export default router;