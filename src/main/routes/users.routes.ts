import type { Router } from 'express';

import { expressRouterAdapter } from '@/main/adapters';
import {
  AuthenticateUserController,
  CreateUserController
} from '@/presentation/controllers';

export const usersRoutes = (router: Router) => {
  router.post('/sign-in', expressRouterAdapter(AuthenticateUserController));
  router.post('/sign-up', expressRouterAdapter(CreateUserController));
};
