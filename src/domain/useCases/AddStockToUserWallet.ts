import type { StockTransaction, Wallet, Stock } from '@/domain/models';

export interface AddStockToUserWallet {
  add: (
    data: AddStockToUserWallet.Request
  ) => Promise<AddStockToUserWallet.Result>;
}

export namespace AddStockToUserWallet {
  export type Request = {
    stockTransactionDetails: StockTransaction;
    wallet: Wallet;
  };

  export type Result = Stock;
}
