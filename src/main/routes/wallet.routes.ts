import { Router } from 'express';

import { expressRouterAdapter } from '@/main/adapters';
import { makeGetUserWalletController } from '@/main/factories/controllers';
import { authentication } from '@/main/middlewares';

const walletRoutes = Router();

walletRoutes.get(
  '/wallet',
  authentication,
  expressRouterAdapter(makeGetUserWalletController())
);
// walletRoutes.post(
//   '/wallet/stock/add',
//   authentication,
//   expressRouterAdapter(makeAddStockToUserWalletController())
// );

export { walletRoutes };
