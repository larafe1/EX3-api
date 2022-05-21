import type { Wallet } from '@/domain/models';

export interface GetUserWalletRepository {
  getById: (
    userId: GetUserWalletRepository.Params
  ) => Promise<GetUserWalletRepository.Result>;
}

export namespace GetUserWalletRepository {
  export type Params = string;

  export type Result = Wallet | null;
}
