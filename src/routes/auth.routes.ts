import { Router } from 'express';

import { authorizationController } from '@controllers';
const authRouter = Router();

authRouter.post('/', authorizationController.auth);
authRouter.post('/token', authorizationController.token);

export default authRouter;
