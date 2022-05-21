import { DatabaseGetUserWallet } from '@/data/useCases';
import { WalletRepository } from '@/infra/database/repositories';

export const makeDatabaseGetUserWallet = () => {
  const walletRepository = new WalletRepository();
  return new DatabaseGetUserWallet(walletRepository);
};
