import { makeDatabaseGetUserWallet } from '@/main/factories/useCases';
import { GetUserWalletController } from '@/presentation/controllers';

export const makeGetUserWalletController = () => {
  const controller = new GetUserWalletController(makeDatabaseGetUserWallet());
  return controller;
};
