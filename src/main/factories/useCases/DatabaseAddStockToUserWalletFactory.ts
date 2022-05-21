import { DatabaseAddStockToUserWallet } from '@/data/useCases';
import { WalletRepository } from '@/infra/database/repositories';

export const makeDatabaseAddStockToUserWallet = () => {
  const walletRepository = new WalletRepository();
  return new DatabaseAddStockToUserWallet(walletRepository);
};
