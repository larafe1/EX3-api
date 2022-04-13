import type { User } from '@/domain/models';

export interface GetUserByUsernameRepository {
  getByUsername: (
    username: GetUserByUsernameRepository.Params
  ) => Promise<GetUserByUsernameRepository.Result>;
}

export namespace GetUserByUsernameRepository {
  export type Params = string;

  export type Result = User | null;
}
