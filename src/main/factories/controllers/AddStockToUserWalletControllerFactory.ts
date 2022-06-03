import {
  makeDatabaseGetUserWallet,
  makeDatabaseAddStockToUserWallet
} from '@/main/factories/useCases';
import { AddStockToUserWalletController } from '@/presentation/controllers';

export const makeAddStockToUserWalletController = () => {
  const controller = new AddStockToUserWalletController(
    makeDatabaseGetUserWallet(),
    makeDatabaseAddStockToUserWallet()
  );
  return controller;
};
