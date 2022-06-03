import type { Stock } from '@/domain/models';

export interface AddStockToUserWalletRepository {
  add: (
    data: AddStockToUserWalletRepository.Params
  ) => Promise<AddStockToUserWalletRepository.Result>;
}

export namespace AddStockToUserWalletRepository {
  export type Params = Stock;

  export type Result = Stock;
}
