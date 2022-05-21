import type { AddStockToUserWalletRepository } from '@/data/protocols/database';
import { AddStockToUserWallet } from '@/domain/useCases';

export class DatabaseAddStockToUserWallet implements AddStockToUserWallet {
  protected readonly addStockToUserWalletRepository: AddStockToUserWalletRepository;

  constructor(addStockToUserWalletRepository: AddStockToUserWalletRepository) {
    this.addStockToUserWalletRepository = addStockToUserWalletRepository;
  }

  async add(stock: AddStockToUserWallet.Params) {}
}
