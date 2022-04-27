import type { User } from '@/domain/models';

export interface GetUserByAccessTokenRepository {
  getByAccessToken: (
    token: GetUserByAccessTokenRepository.Params
  ) => Promise<GetUserByAccessTokenRepository.Result>;
}

export namespace GetUserByAccessTokenRepository {
  export type Params = string;

  export type Result = User | null;
}
