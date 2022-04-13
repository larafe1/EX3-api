import { Router } from 'express';

import { expressRouterAdapter } from '@/main/adapters';
import { makeSignInController } from '@/main/factories/controllers';

const usersRoutes = Router();

usersRoutes.post('/sign-in', expressRouterAdapter(makeSignInController()));

export { usersRoutes };
