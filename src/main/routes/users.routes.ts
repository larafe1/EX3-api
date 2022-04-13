import { Router } from 'express';

import { expressRouterAdapter } from '@/main/adapters';
import {
  makeSignInController,
  makeSignUpController
} from '@/main/factories/controllers';

const usersRoutes = Router();

usersRoutes.post('/sign-in', expressRouterAdapter(makeSignInController()));
usersRoutes.post('/sign-up', expressRouterAdapter(makeSignUpController()));

export { usersRoutes };
