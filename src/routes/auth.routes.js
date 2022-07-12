import {Router} from 'express';
const router = Router();
import * as authController from '../controllers/auth.controller';
import {checkDuplicateUserNameOrEmail} from '../middlewares/verifySignup';

router.post('/signup', checkDuplicateUserNameOrEmail, authController.signup);
router.post('/signin', authController.signin);

export default router;