import type { GetUserWalletRepository } from '@/data/protocols/database';
import { GetUserWallet } from '@/domain/useCases';

export class DatabaseGetUserWallet implements GetUserWallet {
  protected readonly getUserWalletRepository: GetUserWalletRepository;

  constructor(getUserWalletRepository: GetUserWalletRepository) {
    this.getUserWalletRepository = getUserWalletRepository;
  }

  async get(userId: GetUserWallet.Params) {
    const walletExists = await this.getUserWalletRepository.getById(userId);
    if (walletExists) {
      const { items, current_balance } = walletExists;

      return {
        items: items || [],
        current_balance
      };
    }
    return null;
  }
}
