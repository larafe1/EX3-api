import type { Wallet } from '@/domain/models';

export interface GetUserWalletByIdRepository {
  getById: (
    userId: GetUserWalletByIdRepository.Params
  ) => Promise<GetUserWalletByIdRepository.Result>;
}

export namespace GetUserWalletByIdRepository {
  export type Params = string;

  export type Result = Wallet | null;
}
