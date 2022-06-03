import { v4 as uuidV4 } from 'uuid';

import type { AddStockToUserWalletRepository } from '@/data/protocols/database';
import type { Stock, Transaction } from '@/domain/models';
import type { AddStockToUserWallet } from '@/domain/useCases';

export class DatabaseAddStockToUserWallet implements AddStockToUserWallet {
  protected readonly addStockToUserWalletRepository: AddStockToUserWalletRepository;

  constructor(addStockToUserWalletRepository: AddStockToUserWalletRepository) {
    this.addStockToUserWalletRepository = addStockToUserWalletRepository;
  }

  async add({ stockTransactionDetails, wallet }: AddStockToUserWallet.Request) {
    const stockAlreadyExistsInWallet = wallet.items.find(
      (stock) => stock.symbol === stockTransactionDetails.symbol
    );
    if (!stockAlreadyExistsInWallet) {
      const fulfilledTransaction: Transaction = {
        id: uuidV4(),
        ...(({ symbol, ...rest }) => rest)(stockTransactionDetails)
      };

      const newStock = {
        symbol: stockTransactionDetails.symbol,
        total_cost:
          +stockTransactionDetails.amount * +stockTransactionDetails.value,
        fulfilled_transactions: [fulfilledTransaction]
      } as Stock;

      const stock = await this.addStockToUserWalletRepository.add(newStock);
      return stock;
    } else {
      console.log('updateStockWhichAlreadyExistsInWallet');
      return {} as Stock;
    }
  }
}
