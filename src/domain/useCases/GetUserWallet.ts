import type { Wallet } from '@/domain/models';

export interface GetUserWallet {
  get: (userId: GetUserWallet.Params) => Promise<GetUserWallet.Result>;
}

export namespace GetUserWallet {
  export type Params = string;

  export type Result = Wallet | null;
}
