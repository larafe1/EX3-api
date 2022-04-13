import type { User } from '@/domain/models';

export interface CreateUserRepository {
  create: (
    data: CreateUserRepository.Params
  ) => Promise<CreateUserRepository.Result>;
}

export namespace CreateUserRepository {
  export type Params = {
    username: string;
    email: string;
    password: string;
  };

  export type Result = User;
}
