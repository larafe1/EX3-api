import { Router } from 'express';

import { pingRoutes, usersRoutes, walletRoutes } from '@/main/routes';

const router = Router();

router.use(pingRoutes);
router.use(usersRoutes);
router.use(walletRoutes);

export { router };
